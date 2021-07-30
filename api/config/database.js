//setup connection
const mysql = require('mysql');

//database config
const dbConnectConfig = {
  connectionLimit: 50,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'fyp_login_data'
};

const pool = mysql.createPool(dbConnectConfig);

//query call
const query = (q) => new Promise((resolve, reject) => {
  pool.getConnection((err, connection) => {
    if (err) {
      console.log('[MySQL] database connection failure', err);
      reject(err);
    } else {
      connection.query(q, (err, result, fields) => {
        connection.release();
        if (err) reject(err);
        resolve(result);
      });
    }
  });
});

module.exports = {
  mysql: {
    query
  }
};