const mysql = require('mysql');

class DBManager {
  constructor(config) {
    this.con = mysql.createConnection(config);

    this.con.connect(function(err) {
      if (err) {
        console.log('Error connection to database');
      } else {
        console.log('Successfully connected to database!');
      }
    });

    this.con.query('SHOW TABLES;', function(err, res) {
      console.log(res);
    });

  }
}

module.exports = {
  DBManager: DBManager
}
