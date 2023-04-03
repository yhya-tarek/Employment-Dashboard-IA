const router = require("express").Router();
const { authRole, authLogin } = require("../middleware/Auth");
const {
  createJob,
  getJobs,
  getJob,
  updateJob,
  deleteJob,
} = require("../controllers/jobscontroller");

router.get("/", getJobs);

// CREATE JOB
router.post("/", authLogin, authRole("admin"), createJob);

//GET SPECIFIC JOB
router.get("/:id", getJob);

//UPDATE JOB
router.put("/:id", authLogin, authRole("admin"), updateJob);

// DELETE JOB
router.delete("/:id", authLogin, authRole("admin"), deleteJob);

module.exports = router;
