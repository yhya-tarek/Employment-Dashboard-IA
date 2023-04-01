const connection = require("./db/connection");
const express = require("express");
const applicant = require("./routes/applicant");
app = express();

app.use(express.json());

app.use("/applicant", applicant);

app.listen(5000, console.log("server is listening"));
