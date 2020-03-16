// Retrieves the number of yes and no votes for a set of bills
function vote(conn, next) {
	const query =  `SELECT bill.id, bill.bill, MAX(voteID) AS rollCallID,
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

exports.vote = vote;

function release(conn) {
    conn.release(); // release the connection to the pool
}
exports.release = release;