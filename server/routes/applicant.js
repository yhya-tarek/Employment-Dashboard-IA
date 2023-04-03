const router = require("express").Router();
const request = require("../routes/requset");
const jobs = require("../routes/jobs");

router.use("/request", request);

router.use("/jobs", jobs);

module.exports = router;
