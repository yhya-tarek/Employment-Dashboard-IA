const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "employee-dashboard",
  port: "3306",
});

connection.connect(function (err) {
  if (err) {
    console.error("error connecting");
    return;
  }

  console.log("connected to MySQL ");
});

module.exports = connection;
