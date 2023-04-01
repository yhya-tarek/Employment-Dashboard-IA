// const { v4 } = require("uuid");
const router = require("express").Router();
const mysql = require("mysql");
const { getJobs, getJob } = require("../controller/applicantController");

router.get("/", getJobs);

//GET SPECIFIC REQUEST
router.get("/:id", getJob);

module.exports = router;
