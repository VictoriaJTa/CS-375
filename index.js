const express = require('express');
const dbmanager = require('./dbmanager');

const billmod = require('./bill');

const CONFIG = require('./config.json');
let db = new dbmanager.DBManager(CONFIG);

// Set up basic app
app = express();
app.get('/', function(req, res) {
  res.send('Success!');
});

// Bill endpoint
app.get('/bill', function(req, res) {
	let filters;
	if (req.query) {
		filters = req.query;
	} else {
		filters = null;
	}

	db.pool.getConnection(function(err, conn) {
		billmod.bill(conn, req.query, function (value, rows) {
			if (value < 0) {
				console.log('Error while trying to retrieve billss.');
				res.send('Error: Issue while trying to retrieve bills.');
			} else {
				let data = {
					bills: []
				};

				for (let i=0; i<rows.length; i++) {
					let row = rows[i];

					let congress = row.congress;
					let type = row.type;
					switch(type) {
						case 'hconres': 	type = 'house-concurrent-resolution'; break;
						case 'hr': 			type = 'house-bill'; break;
						default: 			type = 'senate-bill'; break;
					}
					let code = row.bill.substring(row.bill.lastIndexOf('.') + 1);	// All bill names formatted as x.x.<code>
					let congress_gov_uri = `https://www.congress.gov/bill/${congress}th-congress/${type}/${code}`;					

					data.bills.push({
						id: row.id,
						bill: row.bill,
						short_title: row.shortTitle,
						summary: row.summary,
						active: row.active,
						vetoed: row.vetoed,
						enacted: row.enacted,
						last_vote: row.lastVote,
						house_passage: row.housePassage,
						senate_passage: row.senatePassage,
						sponsor_first_name: row.firstName,
						sponosor_last_name: row.lastName,
						sponsor_party: row.party,
						sponsor_state: row.state,
						chamber: row.chamber,				
						congress_gov_uri: congress_gov_uri				
					});
				}				
				res.send(data);
			}
		}, filters);
	});
})

port = 8080;
app.listen(port, function() {
  console.log(`Server listening on port ${port}`);
});