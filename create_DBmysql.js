/*const mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'mohit1996',
  database : 'sys'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err);
    return;
  }

 console.log('connected as id ' + connection.threadId);
});*/
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mohit1996"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE mydb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});