const express = require('express');
const cors = require('cors');
const dbmanager = require('./dbmanager');

const billmod = require('./bill');
const votemod = require('./vote');
const statmod = require('./stats');

const CONFIG = require('./config.json');
let db = new dbmanager.DBManager(CONFIG);

// Set up basic app
app = express();
app.use(cors());
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
				res.statusCode = 500;
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

					// Pushes data to the array; can opt to remove fields if desired
					data.bills.push({
						id: row.id,
						bill: row.bill,
						short_title: row.shortTitle,
						summary: row.summary,
						introduced: row.introduced,
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

				res.statusCode = 200;
				res.send(data);
			}
		}, filters);

		billmod.release(conn);
	});
});

// Vote data endpoint
app.get('/vote', function(req, res) {
	db.pool.getConnection(function(err, conn) {
		votemod.vote(conn, function(value, rows) {
			if (value < 0) {
				console.log('Error while trying to retrieve vote distribution.');
				res.statusCode = 500;
				res.send('Error: Issue while trying to retrieve vote distribution.');
			} else {
				let data = {
					votes: []
				};

				for (let i=0; i<rows.length; i++) {
					let row = rows[i];

					data.votes.push({
						id: row.id,
						bill: row.bill,
						roll_call: row.rollCallID,
						vote_yes: row.voteYes,
						vote_no: row.voteNo,
						vote_r_yes: row.voteRepYes,
						vote_r_no: row.voteRepNo,
						vote_d_yes: row.voteDemYes,
						vote_d_no: row.voteDemNo,
						vote_i_yes: row.voteIndYes,
						vote_i_no: row.voteIndNo
					});
				}

				res.statusCode = 200;
				res.send(data);
			}
		});

		votemod.release(conn);
	});
});

// Stat stats endpoint
app.get('/stats', function(req, res) {
	db.pool.getConnection(function(err, conn) {
		let data = {
			chamber: [],
			party: [],
			vote_result: [],
			vote_distribution: [],
			subject: []
		}

		statmod.chamber(conn, function(value, rows) {
			// Chamber distribution
			if (value < 0) {
				console.log('Error while trying to retrieve chamber distribution.');
				res.statusCode = 500;
				res.send('Error: Issue while trying to retrieve chamber distribution.');
			} else {
				for (let i=0; i<rows.length; i++) {
					let row = rows[i];

					data.chamber.push({ chamber: row.chamber, count: row.chamberCount });
				}

				statmod.party(conn, function(value, rows) {
					// Party distributions
					if (value < 0) {
						console.log('Error while trying to retrieve chamber distribution.');
						res.statusCode = 500;
						res.send('Error: Issue while trying to retrieve chamber distribution.');
					} else {
						for (let i=0; i<rows.length; i++) {
							let row = rows[i];

							data.party.push({ party: row.party, count: row.partyCount });
						}

						statmod.voteResult(conn, function(value, rows) {
							// Vote results
							if (value < 0) {
								console.log('Error while trying to retrieve vote results.');
								res.statusCode = 500;
								res.send('Error: Issue while trying to retrieve vote results.');
							} else {
								for (let i=0; i<rows.length; i++) {
									let row = rows[i];

									data.vote_result.push({ vote_result: row.result, count: row.resultCount });
								}

								statmod.vote(conn, function(value, rows) {
									// Vote distributions
									if (value <0) {
										console.log('Error while trying to retrieve vote diistribution.');
										res.statusCode = 500;
										res.send('Error: Issue while trying to retrieve vote distribution.');
									} else {
										for (let i=0; i<rows.length; i++) {
											let row = rows[i];

											data.vote_distribution.push({ bill_id: row.id, bill: row.bill, roll_call: row.rollCallID,
												vote_yes: row.voteYes, vote_no: row.voteNo,
												vote_rep_yes: row.voteRepYes, vote_rep_no: row.voteRepNo,
												vote_dem_yes: row.voteDemYes, vote_dem_no: row.voteDemNo,
												vote_ind_yes: row.voteIndYes, vote_ind_no: row.voteIndNo
											});
										}

										statmod.subject(conn, function(value, rows) {
											// Subject distributions
											if (value <0) {
												console.log('Error while trying to retrieve subject distribution.');
												res.statusCode = 500;
												res.send('Error: Issue while trying to retrieve subject distribution.');
											} else {
												for (let i=0; i<rows.length; i++) {
													let row = rows[i];

													data.subject.push({ subject: row.primarySubject,  count: row.billCount });
												}

												statmod.release(conn);

												res.statusCode = 200;
												res.send(data);
											}
										});
									}
								});
							}
						});
					}
				});
			}
		});
	});
});

port = 8080;
app.listen(port, function() {
  console.log(`Server listening on port ${port}`);
});
