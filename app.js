const connection = require("./db/connection");
const express = require("express");
app = express();

const start = async () => {
  try {
    await connection();
    app.listen(5000, console.log("server is listening"));
  } catch (error) {
    console.log(error);
  }
};

start();
