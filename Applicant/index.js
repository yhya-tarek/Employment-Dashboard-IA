const express = require("express");
const bodyParser = require("body-parser");
const app = express();

//import authentication
const adminAuth = require("./middleware/admin")

//import applicant
const applicant = require("./routers/applicant")

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

//** applicant task **//
app.use("/applicant",adminAuth ,applicant)


app.listen(4000, "localhost", () => {
  console.log("server is running");
});
