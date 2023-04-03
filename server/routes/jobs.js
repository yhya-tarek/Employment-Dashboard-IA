const router = require("express").Router();
const { authRole, authUser } = require("../middleware/Auth");
const {
  createJob,
  getJobs,
  getJob,
  updateJob,
  deleteJob,
} = require("../controllers/jobscontroller");

router.get("/", getJobs);

// CREATE JOB
router.post("/", authRole("1"), authUser, createJob);

//GET SPECIFIC JOB
router.get("/:id", getJob);

//UPDATE JOB
router.put("/:id", authRole("1"), authUser, updateJob);

// DELETE JOB
router.delete("/:id", authRole("1"), authUser, deleteJob);

module.exports = router;
