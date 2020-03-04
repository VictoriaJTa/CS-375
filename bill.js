function bill(conn, id, next, filters = null) {
	let clause = '';
	if (id !== null) {
		 clause += `WHERE bill.id = ${conn.escape(id)} `;
	}

	if (filters !== null && filters.length > 0) {
		for (let i=0; i<test.length; i++) {
			if (clause === '') {
				clause += 'WHERE ';
			} else  {
				clause += 'AND ';
			}

			let filter = test[i];
			clause += `${filter.table}.${filter.column} = ${conn.escape(filter.value)} `;
		}
	}

	const query =  `SELECT bill.bill, bill.shortTitle, bill.summary, bill.type, bill.congress,
						member.firstName, member.lastName, member.party, member.state, member.chamber
					FROM bill
						INNER JOIN member ON member.id = bill.sponsorID
					${clause}
					LIMIT 10`;

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