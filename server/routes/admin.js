const router = require("express").Router();
const {
  getApplicants,
  addNewUser,
  updateUser,
  deleteUser,
  updateResponse,
  getRequests,
  createSkills,
  getSkills,
  getSkill,
  deleteSkill,
} = require("../controllers/adminController");

//* fucntion read all applicant from DB
router.get("/", getApplicants);

//* fucntion add new applicant to DB
router.post("/", addNewUser);

//* change(update) status of applicant in DB
router.put("/:user_id", updateUser);

//* delete the row of employ id from DB
router.delete("/:user_id", deleteUser);

router.get("/requests", getRequests);

router.put("/requests/:user_id&:job_id", updateResponse);

router.get("/skill", getSkills);

router.get("/skill/:skill_id", getSkill);

router.post("/skill", createSkills);

router.delete("/skill/:skill_id", deleteSkill);

module.exports = router;
