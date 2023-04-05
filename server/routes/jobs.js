const router = require("express").Router();
const { authRole, authLogin } = require("../middleware/Auth");
const requests = require("../routes/request");
const {
  createJob,
  getJobs,
  getJob,
  updateJob,
  deleteJob,
} = require("../controllers/jobscontroller");

router.use("/requests", requests);

router.get("/", getJobs);

// CREATE JOB
router.post("/", createJob);

//GET SPECIFIC JOB
router.get("/:position", getJob);

//UPDATE JOB
router.put("/:id", authLogin, authRole("admin"), updateJob);

// DELETE JOB
router.delete("/:id", authLogin, authRole("admin"), deleteJob);

module.exports = router;
