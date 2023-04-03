const router = require("express").Router();
const { authRole, authLogin } = require("../middleware/Auth");
const {
  getQualifications,
  createQualification,
  getQualification,
  updateQualification,
  deleteQualification,
} = require("../controllers/qualificationController");

router.get("/", authLogin, getQualifications);

// CREATE QUALIFICATION
router.post("/", authLogin, authRole("admin"), createQualification);

//GET SPECIFIC QUALIFICATION
router.get("/:id", authLogin, getQualification);

//UPDATE QUALIFICATION
router.put("/:id", authLogin, authRole("admin"), updateQualification);

// DELETE QUALIFICATION
router.delete("/:id", authLogin, authRole("admin"), deleteQualification);

module.exports = router;
