const mysql = require('mysql');
const fs = require('fs');
const request = require('request');

class DBManager {
  constructor(config) {
    // The list of tables needed
    this.tables = ['member', 'bill', 'vote', 'membervote'];

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

      manager.tables.forEach((item, i) => {
        if (!names.includes(item)) {
          manager.createTable(item);
        }
      });
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
      case 'bill':
      case 'vote':
      case 'membervote':
        console.log(`Attempting to create ${tableName} table`);
        fs.readFile(`schemas/${tableName}.table`, 'utf8', (err, data) => {
          if (err) throw err;
          manager.con.query(data, function(err, res) {
            if (err) throw err;
            console.log('Success!')
          })
        });
        break;
      default:
        console.log(`Attemting to create unrecognized table: ${tableName}`);
        break;
    }

    // Populate tables
    switch(tableName) {
      case 'member':
        this.populateMembers('116', 'senate');
        this.populateMembers('116', 'house');
        break;
      default:
        break;
    }
  }

  populateMembers(congress, chamber) {
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
          if (item.in_office) {
            let district = isNaN(item.district) ? null : item.district;
            let atLarge = item.at_large ? item.at_large : null;
            let party = item.party == 'ID' ? 'I' : item.party;

            let query = `INSERT INTO member( id, title, apiURI, firstName, lastName, birthDate, gender, party, leadershipRole, twitter, URL, inOffice, nextElection, state, district, atLarge, chamber, congress)
                          VALUES('${item.id}', '${item.title}', '${item.api_uri}', "${item.first_name}", "${item.last_name}", '${item.date_of_birth}', '${item.gender}', '${party}', '${item.leadership_role}', '${item.twitter_account}', '${item.url}', ${item.in_office}, ${item.next_election}, '${item.state}', ${district}, ${atLarge}, '${chamber}', ${congress});`
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
