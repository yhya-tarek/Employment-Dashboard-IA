const router = require("express").Router();
const conn = require("../db/connection");
//* temprory file(jason)

//* fucntion read all applicant from DB
router.get("/", function (req, res) {
  conn.query("select * from user", (err, result) => {
    if (err) {
      console.log(err);
      res.json("failed to read files");
    } else {
      res.json(result);
    }
  });
});

//* fucntion add new applicant to DB
router.post("/", function (req, res) {
  const newData = req.body;
  conn.query(
    "insert into user set?",
    {
      name: newData.name,
      Email: newData.Email,
      password: newData.password,
      phone: newData.phone,
      status: newData.status,
      image_url: newData.image_url,
      bio: newData.bio,
    },
    (err) => {
      if (err) {
        res.statusCode = 500;
        res.json("failed to added user");
      } else {
        res.json("files added successful");
      }
    }
  );
});

//* function change(update) status of applicant in DB
router.put("/:user_id", function (req, res) {
  const { user_id } = req.params;
  const newData = req.body;
  conn.query(
    "update user set? where?",
    [{ status: newData.status }, { user_id: user_id }],
    (err) => {
      if (err) {
        res.statusCode = 500;
        res.json({ message: "failed to update" });
      } else {
        res.json({ message: "success to update" });
      }
    }
  );
});

//* function delete the row of employ id from DB
router.delete("/:user_id", (req, res) => {
  const { user_id } = req.params;
  conn.query("delete from user where ?", { user_id: user_id }, (err) => {
    if (err) {
      res.statusCode = 500;
      console.log(err);
      res.json({ message: "failed to delete user" });
    } else {
      res.json({ message: "success to delete" });
    }
  });
});
module.exports = router;
