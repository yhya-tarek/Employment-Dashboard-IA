const router = require("express").Router();
const { authRole, authUser } = require("../middleware/Auth");
const {
  getQualifications,
  createQualification,
  getQualification,
  updateQualification,
  deleteQualification,
} = require("../controllers/qualificationController");

router.get("/", getQualifications);

// CREATE QUALIFICATION
router.post("/", authRole("1"), authUser, createQualification);

//GET SPECIFIC QUALIFICATION
router.get("/:id", getQualification);

//UPDATE QUALIFICATION
router.put("/:id", authRole("1"), authUser, updateQualification);

// DELETE QUALIFICATION
router.delete("/:id", authRole("1"), authUser, deleteQualification);

module.exports = router;
