const express = require("express");
const applicant = require("./routes/applicant");
const admin = require("./routes/admin");
const login = require("./routes/login");
const jobs = require("./routes/jobs");
const { authLogin, authRole } = require("./middleware/Auth");
const cors = require("cors");
const session = require("express-session");

const qualifications = require("./routes/qualifications");
app = express();

app.use(express.json());
app.use(cors());
app.use(
  session({
    secret: "jlk5453sdjflkajdlkfjaldfjlskdjfaeofjcvn542gae",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(express.urlencoded({ extended: true }));

app.use("/applicant", applicant);

app.use("/admin", authLogin, authRole("admin"), admin);

app.use("/login", login);

app.use("/jobs", jobs);

// app.use("/qualifications", qualifications);

app.listen(5000, console.log("server is listening"));
