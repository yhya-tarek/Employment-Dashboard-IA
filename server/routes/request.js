const router = require("express").Router();
// const { authRole, authLogin } = require("../middleware/Auth");

const {
  getRequests,
  sendRequest,
  respondToRequest,
  deleteRequest,
} = require("../controllers/requestController");

//GET REQUEST
router.get("/", getRequests);

//CREATE REQUEST
router.post("/", sendRequest);

//RESPOND TO A REQUEST
router.put("/:user_id&:job_id", respondToRequest);

//DELETE REQUEST
router.delete("/:user_id&:job_id", deleteRequest);

module.exports = router;
