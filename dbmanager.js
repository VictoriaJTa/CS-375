const mysql = require('mysql');
const fs = require('fs');
const request = require('request');

class DBManager {
  constructor(config) {
    // A connection to the database
    this.con = mysql.createConnection(config);

    // Connect and initialize tables
    let manager = this;
    this.con.connect(function(err) {
      if (err) {
        console.log('Error connection to database');
      } else {
        console.log('Successfully connected to database!');
        manager.initializeTables();
      }
    });
  }

  /**
   Checks for the existence of all necessary tables,
   creating them if they do not exist.
   */
  initializeTables() {
    let manager = this;
    this.con.query('SHOW TABLES;', function(err, res) {
      let names = [];
      res.forEach((item, i) => {
        names.push(item.Tables_in_billbar);
      });

      if (!names.includes('member')) {
        manager.createTable('member');
      } else if (!names.includes('bill')) {
        manager.createTable('bill');
      } else if (!names.includes('vote')) {
        manager.createTable('vote');
      } else if (!names.includes('membervote')) {
        manager.createTable('membervote');
      }
    });
  }

  /**
   Creates a table. Will on create tables that have specifically been enabled
   in this function.
   @param{tableName} String - The string that represents the table name
   */
  createTable(tableName) {
    let manager = this;

    // Create tables
    switch(tableName) {
      case 'member':
        this.createGeneralTable(tableName, this.populateMembers, 'bill');
        break;
      case 'bill':
        this.createGeneralTable(tableName, this.populateBills, 'vote');
        break;
      case 'vote':
        this.createGeneralTable(tableName, this.populateVotes, 'membervote');
        break;
      case 'membervote':
        this.createGeneralTable(tableName, null, null);
        break;
      default:
        console.log(`Attempting to create unrecognized table: ${tableName}`);
        break;
    }
  }

  /**
   A general function for creating a table and then populating it.
   It also allows for introducing dependencies so that we can create
   tables in sequence.
   @param{tableName} String - The name of the table to create
   @param{populateFn} Function - The function to call to populate the new table
   @param{nextTable} String - The name of the next table (if there is one)
   */
  createGeneralTable(tableName, populateFn, nextTable) {
    let manager = this;

    console.log(`Attempting to create ${tableName} table`);
    fs.readFile(`schemas/${tableName}.table`, 'utf8', (err, data) => {
      if (err) throw err;
      manager.con.query(data, function(err, res) {
        if (err) throw err;
        console.log('Success!')
        if (populateFn) populateFn(manager);
        if (nextTable) manager.createTable(nextTable);
      })
    });
  }

  /**
   Function for populating the member table
   @param{manager} DBManager - An instance of this class so we can populate the table
   */
  populateMembers(manager) {
    manager.populateChamber('116', 'senate');
    manager.populateChamber('116', 'house');
  }

  /**
   Populates the member database with currently active members
   @param{congress} String - The current congress (or desired)
   @param{chamber} String - Which chamber? House or Senate?
   */
  populateChamber(congress, chamber) {
    const options = {
      url: `https://api.propublica.org/congress/v1/${congress}/${chamber}/members.json`,
      headers: {
        'X-API-Key': 'NZYsU28NjeOEIMSEad1b67YQZdHfrBMOOQo9WXz5'
      }
    }

    let manager = this;
    request(options, (err, response, body) => {
      if (err) throw err;
      if (response.statusCode == 200) {
        let data = JSON.parse(body);
        data.results[0].members.forEach((item, i) => {
          let district = isNaN(item.district) ? null : item.district;
          let atLarge = item.at_large ? item.at_large : null;
          let party = item.party == 'ID' ? 'I' : item.party;

          let query = `INSERT INTO member( id, title, apiURI, firstName, lastName, birthDate, gender, party, leadershipRole, twitter, URL, inOffice, nextElection, state, district, atLarge, chamber, congress)
                        VALUES('${item.id}', '${item.title}', '${item.api_uri}', "${item.first_name}", "${item.last_name}", '${item.date_of_birth}', '${item.gender}', '${party}', '${item.leadership_role}', '${item.twitter_account}', '${item.url}', ${item.in_office}, ${item.next_election}, '${item.state}', ${district}, ${atLarge}, '${chamber}', ${congress})
                        ON DUPLICATE KEY UPDATE title='${item.title}', party=IF(${item.in_office}, '${party}', party), leadershipRole='${item.leadership_role}', twitter='${item.twitter_account}', URL='${item.url}', inOffice=${item.in_office}, nextElection=${item.next_election}, state='${item.state}', district=${district}, atLarge=${atLarge}, chamber='${chamber}', congress=${congress};`
          manager.con.query(query, (err, res) => {
            if (err) throw err;
          });
        });
      }
    });
  }

  populateBills(manager) {
    let congress = '116';
    let chamber = 'both';
    let types = ['introduced', 'updated', 'active', 'passed', 'enacted', 'vetoed'];
    let offset = 0;

    types.forEach((item, i) => {
      manager.populateBillChunk(chamber, congress, item, offset);
    });
  }

  populateBillChunk(chamber, congress, type, offset) {
    const options = {
      url: `https://api.propublica.org/congress/v1/${congress}/${chamber}/bills/${type}.json?offset=${offset*20}`,
      headers: {
        'X-API-Key': 'NZYsU28NjeOEIMSEad1b67YQZdHfrBMOOQo9WXz5'
      }
    }

    let manager = this;
    request(options, (err, response, body) => {
      if (err) throw err;
      if (response.statusCode == 200) {
        let data = JSON.parse(body)['results'][0]['bills'];
        data.forEach((item, i) => {
          let intro = item.introduced_date ? `"${item.introduced_date}"` : null;
          let veto = item.vetoed ? `"${item.vetoed}"` : null;
          let enact = item.enacted ? `"${item.enacted}"` : null;
          let last = item.last_vote ? `"${item.last_vote}"` : null;
          let house = item.house_passage ? `"${item.house_passage}"` : null;
          let senate = item.senate_passage ? `"${item.senate_passage}"` : null;
          let title = `${JSON.stringify(item.title)}`;
          let sTitle = `${JSON.stringify(item.short_title)}`;
          let sum = `${JSON.stringify(item.summary)}`;
          let sSum = `${JSON.stringify(item.summary_short)}`;
          let subj = `${JSON.stringify(item.primary_subject)}`;

          let query = `INSERT INTO bill( id, slug, congress, bill, type, uri, title, shortTitle, sponsorID, introduced, active, lastVote, housePassage, senatePassage, enacted, vetoed, primarySubject, summary, shortSummary )
                        VALUES('${item.bill_id}', '${item.bill_slug}', ${congress}, '${item.number}', '${item.bill_type}', '${item.bill_uri}', ${title}, ${sTitle}, '${item.sponsor_id}', ${intro}, ${item.active}, ${last}, ${house}, ${senate}, ${enact}, ${veto}, ${subj}, ${sum}, ${sSum})
                        ON DUPLICATE KEY UPDATE title=${title}, shortTitle=${sTitle}, introduced=${intro}, active=${item.active}, lastVote=${last}, housePassage=${house}, senatePassage=${senate}, enacted=${enact}, vetoed=${veto}, primarySubject=${subj}, summary=${sum}, shortSummary=${sSum};`
          manager.con.query(query, (err, res) => {
            if (err) throw err;
          });
        });

        if (data.length == 20) {
          manager.populateBillChunk(chamber, congress, type, offset+1);
        }
      }
    });
  }

  populateVotes(manager) {
    function pad(num, size){ return ('000000000' + num).substr(-size); }
    let monthA = 1;
    let monthB = 1;
    let year = 2020;
    let dayA = 1;
    let dayB = 7;

    let monthLimit = 13;
    while (monthB != monthLimit) {
      let from = `${year}-${pad(monthA, 2)}-${pad(dayA, 2)}`;
      let to = `${year}-${pad(monthB, 2)}-${pad(dayB, 2)}`;

      manager.populateVoteRange('house', from, to);
      manager.populateVoteRange('senate', from, to);

      dayA = dayB;
      dayB = dayB + 7;
      if (dayB > 28) {
        dayB = 1;
        monthB = monthB + 1;
      } else if (monthA != monthB) {
        dayA = 1;
        monthA = monthB;
      }
    }

    monthB = monthLimit - 1;
    dayB = 31;

    let from = `${year}-${pad(monthA, 2)}-${pad(dayA, 2)}`;
    let to = `${year}-${pad(monthB, 2)}-${pad(dayB, 2)}`;

    manager.populateVoteRange('house', from, to);
    manager.populateVoteRange('senate', from, to);
  }

  populateVoteRange(chamber, start, end) {
    const options = {
      url: `https://api.propublica.org/congress/v1/${chamber}/votes/${start}/${end}.json`,
      headers: {
        'X-API-Key': 'NZYsU28NjeOEIMSEad1b67YQZdHfrBMOOQo9WXz5'
      }
    }

    let manager = this;
    request(options, (err, response, body) => {
      if (err) throw err;
      if (response.statusCode == 200) {
        let data = JSON.parse(body)['results']['votes'];

        data.forEach((item, i) => {
          let question = JSON.stringify(item.question);
          let desc = JSON.stringify(item.description);
          let type = JSON.stringify(item.vote_type);
          let datetime = JSON.stringify(item.date + ' ' + item.time);
          let billID = JSON.stringify(item.bill.bill_id);
          let vID = JSON.stringify(`${item.bill.bill_id}_${item.roll_call}`)


          if (!type.includes("QUORUM") && item.bill.bill_id) {
            let query = `INSERT IGNORE INTO vote( id, congress, chamber, session, rollCall, billID, question, description, type, datetime, result )
                          VALUES('${vID}', ${item.congress}, '${chamber}', ${item.session}, ${item.roll_call}, ${billID}, ${question}, ${desc}, ${type}, ${datetime}, '${item.result}');`
            manager.con.query(query, (err, res) => {
              if (err) throw err;
            });
          }
        });
      }
    });
  }
}

module.exports = {
  DBManager: DBManager
}
