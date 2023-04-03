const router = require("express").Router();
const { authRole, authLogin } = require("../middleware/Auth");

const {
  getApplicants,
  addNewUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

router.get("/", getApplicants);

//* fucntion add new applicant to DB
router.post("/", authLogin, authRole("admin"), addNewUser);

//* change(update) status of applicant in DB
router.put("/:user_id", authLogin, authRole("admin"), updateUser);

//* delete the row of employ id from DB
router.delete("/:user_id", authLogin, authRole("admin"), deleteUser);

module.exports = router;
