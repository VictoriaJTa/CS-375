const mysql = require('mysql');
const fs = require('fs');

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
  }
}

module.exports = {
  DBManager: DBManager
}
