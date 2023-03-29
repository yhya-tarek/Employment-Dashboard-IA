const mysql = require("mysql");
const connection = () => {
  return mysql
    .createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "employee-dashboard-db",
      port: "3306",
    })
    .connect();
};

module.exports = connection;
