const express = require("express");
const applicant = require("./routes/applicant");
const admin = require("./routes/admin");
app = express();

app.use(express.json());

app.use("/applicant", applicant);

app.use("/admin", admin);

app.listen(5000, console.log("server is listening"));
