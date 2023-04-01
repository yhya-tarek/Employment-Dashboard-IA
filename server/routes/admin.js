const router = require("express").Router();
const {
  getApplicants,
  addNewUser,
  updateUser,
  deleteUser,
  updateResponse,
  getRequests,
} = require("../controllers/adminController");

//* temprory file(jason)

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

module.exports = router;
