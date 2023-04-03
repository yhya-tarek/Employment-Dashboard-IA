const connection = require("../db/connection")();

module.exports = {
  loginAuth: async (req, res) => {
    const data = req.body;
    const sql = `SELECT * FROM user WHERE Email = "${data.Email}" limit 1`;
    connection.query(sql, function (err, result, fields) {
      if (err) {
        res.statusCode = 400;
        res.json(err);
      } else if (result[0]) {
        try {
          if (bcrypt.compare(data.password, result[0].password)) {
            req.session.Email = data.Email;
            req.session.type = result[0].type;
            return res.status(200).json({ authorized: true });
          } else {
            return res.status(401).json({ authorized: false });
          }
        } catch (error) {
          return res.status(500).send();
        }
      } else {
        return res
          .status(401)
          .json({ msg: "Incorrect Username and/or Password!" });
      }
      res.end();
    });
  },
};
