let DEFAULT_INTERVAL = '1 MONTH';

function chamber(conn, next) {
  const query =  `SELECT member.chamber, COUNT(member.chamber) AS chamberCount
                  FROM member
                      INNER JOIN bill ON bill.sponsorID = member.id 
                  WHERE bill.lastVote > NOW() - INTERVAL ${DEFAULT_INTERVAL} 
                  GROUP BY member.chamber;`;

	conn.query(query, function(err, rows) {		
		if (err) {
			console.log(err);
			next (-1, rows);
		} else {
			next(rows.length, rows);
		}
	});
}

function party(conn, next) {
  const query =  `SELECT member.party, COUNT(member.party) AS partyCount
                  FROM member
                      INNER JOIN bill ON bill.sponsorID = member.id 
                  WHERE bill.lastVote > NOW() - INTERVAL ${DEFAULT_INTERVAL} 
                  GROUP BY member.party`;

	conn.query(query, function(err, rows) {
		if (err) {
			console.log(err);
			next (-1, rows);
		} else {
			next(rows.length, rows);
		}
	});
}

function voteResult(conn, next) {
  const query =  `SELECT vote.result, COUNT(vote.result) AS resultCount
                  FROM vote 
                        INNER JOIN bill ON bill.id = vote.billID 
                  WHERE bill.lastVote > NOW() - INTERVAL ${DEFAULT_INTERVAL} 
                  GROUP BY vote.result;`;

	conn.query(query, function(err, rows) {
		if (err) {
			console.log(err);
			next (-1, rows);
		} else {
			next(rows.length, rows);
		}
	});
}

function vote(conn, next) {
  const query =    `SELECT bill.id, bill.bill, MAX(voteID) AS rollCallID,
                    SUM(CASE WHEN votePosition = 'yes' 
                        THEN 1 ELSE 0 
                        END) AS voteYes,
                    SUM(CASE WHEN votePosition = 'no' 
                        THEN 1 ELSE 0 
                        END) AS voteNo,
                    SUM(CASE WHEN member.party = 'R' AND votePosition =  'yes' 
                        THEN 1 ELSE 0 
                        END) AS voteRepYes,
                    SUM(CASE WHEN member.party = 'R' AND votePosition =  'no' 
                        THEN 1 ELSE 0 
                        END) AS voteRepNo,
                    SUM(CASE WHEN member.party = 'D' AND votePosition =  'yes' 
                        THEN 1 ELSE 0 
                        END) AS voteDemYes,
                    SUM(CASE WHEN member.party = 'D' AND votePosition =  'no' 
                        THEN 1 ELSE 0 
                        END) AS voteDemNo,
                    SUM(CASE WHEN member.party = 'I' AND votePosition =  'yes' 
                        THEN 1 ELSE 0 
                        END) AS voteIndYes,
                    SUM(CASE WHEN member.party = 'I' AND votePosition =  'no' 
                        THEN 1 ELSE 0 
                        END) AS voteIndNo
                    FROM memberVote
                    INNER JOIN member ON member.id = memberVote.memberID
                    INNER JOIN bill ON bill.id = memberVote.billID 
                    WHERE bill.lastVote > NOW() - INTERVAL ${DEFAULT_INTERVAL} 
                    GROUP BY billID`;

	conn.query(query, function(err, rows) {
		if (err) {
			console.log(err);
			next (-1, rows);
		} else {
			next(rows.length, rows);
		}
	});
}

function subject(conn, next) {
    const query =  `SELECT bill.id, bill.bill, 
                        IF(bill.primarySubject IS NULL OR bill.primarySubject = '', '[NO SUBJECT]', bill.primarySubject) AS primarySubject, COUNT(bill.primarySubject) AS billCount 
                    FROM bill
                    WHERE bill.lastVote > NOW() - INTERVAL ${DEFAULT_INTERVAL} 
                    GROUP BY bill.primarySubject;`;

	conn.query(query, function(err, rows) {
		if (err) {
			console.log(err);
			next (-1, rows);
		} else {
			next(rows.length, rows);
		}
	});
}

exports.chamber = chamber;
exports.party = party;
exports.voteResult = voteResult;
exports.vote = vote;
exports.subject = subject;

function release(conn) {
    conn.release(); // release the connection to the pool
}
exports.release = release;