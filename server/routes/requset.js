const router = require("express").Router();
const { authRole, authLogin } = require("../middleware/Auth");

const {
  getRequests,
  sendRequest,
  respondToRequest,
  deleteRequest,
} = require("../controllers/requestController");

//GET REQUEST
router.get("/", authLogin, authRole("admin"), getRequests);

//CREATE REQUEST
router.post("/", authLogin, sendRequest);

//RESPOND TO A REQUEST
router.put("/:user_id&:job_id", authLogin, authRole("admin"), respondToRequest);

//DELETE REQUEST
router.delete("/:user_id&:job_id", authLogin, authRole("admin"), deleteRequest);

module.exports = router;
