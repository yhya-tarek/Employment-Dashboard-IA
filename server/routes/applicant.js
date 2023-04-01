// const { v4 } = require("uuid");
// const { v4 } = require("uuid");
const router = require("express").Router();
const {
  getRequests,
  sendRequest,
  deleteRequest,
  getJobs,
  getJob,
} = require("../controllers/applicantController");
const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "employee-dashboard-db",
});

//GET REQUEST
router.get("/request", getRequests);

//CREATE REQUEST
router.post("/request", sendRequest);

// //UPDATE REQUEST
// router.put("/:user_id", (req, res) => {
//   const sql = `select * from request_job where user_id = ${req.body.user_id} and job_id = ${req.body.job_id}`;
//   const check = db.query(sql, (err, result, fields) => {
//     if (err) return res.json(err);
//   });
//   if (check.result !== null) {
//     const sql = "update request_job set job_id = ? data = ? where user_id = ? and job_id = ";
//     const values = [
//       req.body.job_id,
//       ,
//       req.body.data,
//     ];
//     const user_id = req.params.user_id;
//     db.query(sql, [...values, user_id], (err, data) => {
//       if (err) return res.json("Error");
//       return res.status(200).json(data);
//     });
//   } else {
//     return res.status(404).json({ msg: "No user was found" });
//   }
// });

//DELETE REQUEST
router.delete("/request/:user_id&:job_id", deleteRequest);

//get all jobs
router.get("/jobs", getJobs);

//GET SPECIFIC job
router.get("/jobs/:id", getJob);

module.exports = router;
