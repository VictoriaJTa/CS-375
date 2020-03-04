function getStatus(status) {
	let statuses = [];

	if (status.includes('introduced')) {

		let date = new Date();
		let year = date.getFullYear();
		let month = date.getMonth() + 1;
		month = month < 10 ? `0${month}` : month;
		let day = date.getDate();
		day = day < 10 ? `0${day}` : day;

		let fullDate = `${year}-${month}-${day}`;				

		statuses.push({
			table: 'member',
			column: 'congress',
			value: [116],
			type: 0
		});
	}

	if (status.includes('active')) {		
		statuses.push({ table: 'bill', column: 'active', value: [true], type: 0 });
	}

	if (status.includes('passed')) {
		statuses.push({ table: 'bill', column: 'housePassage', value: [], type: 3 });
		statuses.push({ table: 'bill', column: 'senatePassage',	value: [], type: 3 });
	}

	if (status.includes('enacted')) {
		statuses.push({ table: 'bill', column: 'enacted', value: [], type: 3 });
	}

	if (status.includes('updated')) {	
		statuses.push({ table: 'bill', column: 'lastVote', value: ['2019-01-02'], type: 1 });	
		statuses.push({ table: 'member', column: 'congress', value: [116], type: 2 });	
	}

	if (status.includes('vetoed')) {
		statuses.push({ table: 'bill', column: 'vetoed', value: [], type: 3 });	
	}	

	return statuses;
}

function processFilters(conn, filters, is_or = false) {
	let clause = '';

	for (let i=0; i<filters.length; i++) {
		let filter = filters[i];

		if (filter.type === 1) {
			clause += `${filter.table}.${filter.column} > ${conn.escape(filter.value[0])}`;
		} else if (filter.type === 2) {
			clause += `${filter.table}.${filter.column} < ${conn.escape(filter.value[0])}`;
		} else if (filter.type === 3) {
			clause += `${filter.table}.${filter.column} IS NOT NULL`;			
		} else if (filter.type === 4) {		// Differing values
			let subfilters = filter.value;
			let subclause = processFilters(conn, subfilters, true);

			clause += `(${subclause})`;
		} else {
			let group = '';
			for (let j=0; j<filter.value.length; j++) {
				group += `${filter.table}.${filter.column} = ${conn.escape(filter.value[j])}`;			

				if (j !== filter.value.length - 1) {
					group += ' OR ';
				}
			}

			clause += `(${group}) `;
		}

		if (i !== filters.length - 1) {
			if (!is_or) {
				clause += ' AND ';
			} else {
				clause += ' OR ';
			}
		}
	}	

	return clause;
}

// Constructs clause using passing in id and filters
function getClause(conn, filters) {
	if (filters === null) {
		return '';
	}

	let formatted = [];
	for (let filter of Object.keys(filters)) {	
		const billcol = ['id', 'lastVote', 'dateMin', 'dateMax'];
		const membercol = ['chamber'];
		const sharedcol = ['status'];

		let column = filter;
		let value = filters[filter];
		value = value.split(',');

		let table = '';

		if (billcol.includes(column)) {	
			if (column === 'dateMin') {
				formatted.push({ table: 'bill', column: 'lastVote', value: value, type: 1 });
			} else if (column === 'dateMax') {
				formatted.push({ table: 'bill', column: 'lastVote', value: value, type: 2 });
			} else {
				formatted.push({ table: 'bill', column: column, value: value, type: 0 });
			}			
		}

		if (membercol.includes(column)) {	
			formatted.push({ table: 'member', column: column, value: value, type: 0 });		
		}

		if (sharedcol.includes(column)) {
			if (column === 'status') {
				let statuses = getStatus(value);
				formatted.push({ type: 4, value: statuses });
			}
		}
	}

	let clause = processFilters(conn, formatted);
	return clause;
}

// Executes the quert and returns the rows so that the client application can use it accordingly
function bill(conn, filters, next) {
	let clause = getClause(conn, filters);

	let where = '';
	if (clause !== null && clause !== '') {
		where += `WHERE ${clause}`;
	}

	const query =  `SELECT bill.id, bill.bill, bill.shortTitle, bill.summary, bill.type, bill.congress, bill.senatePassage, bill.housePassage, bill.active, bill.vetoed, bill.enacted, bill.lastVote, 
						member.firstName, member.lastName, member.party, member.state, member.chamber
					FROM bill
						INNER JOIN member ON member.id = bill.sponsorID
					${where}
					ORDER BY bill.lastVote DESC
					LIMIT 20`;

	conn.query(query, function(err, rows) {
		conn.release(); // release the connection to the pool
		if (err) {
			console.log(err);
			next (-1, rows);
		} else {
			next(rows.length, rows);
		}
	});

}

exports.bill = bill;