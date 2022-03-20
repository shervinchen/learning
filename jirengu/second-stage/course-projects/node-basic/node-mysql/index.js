var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  // database: 'my_db',
});

connection.connect();

connection.query(
  'CREATE DATABASE IF NOT EXISTS nodemysql DEFAULT CHARSET utf8mb4 COLLATE utf8mb4_unicode_520_ci;',
  function (error, results, fields) {
    if (error) throw error;
    console.log(results);
  }
);

connection.query('use nodemysql');

connection.query(
  `CREATE TABLE IF NOT EXISTS user(
    name text,
    age int
  );`,
  function (error, results, fields) {
    if (error) throw error;
    console.log(results);
  }
);

connection.end();
