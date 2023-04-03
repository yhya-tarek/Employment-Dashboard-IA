const router = require("express").Router();
const { authRole, authLogin } = require("../middleware/Auth");

const {
  createSkills,
  getSkills,
  getSkill,
  deleteSkill,
} = require("../controllers/skillcontorller");

router.get("/", getSkills);

router.get("/:skill_id", getSkill);

router.post("/", authLogin, authRole("admin"), createSkills);

router.delete("/:skill_id", authLogin, authRole("admin"), deleteSkill);

module.exports = router;
