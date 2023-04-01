const connection = require("../db/connection")();

module.exports = {
  getRequests: (req, res) => {
    const sql = `SELECT * FROM request_job where user_id = ${req.body.user_id}`;
    connection.query(sql, (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    });
  },

  sendRequest: (req, res) => {
    const sql = `select * from request_job where user_id = ${req.body.user_id} and job_id = ${req.body.job_id}`;
    connection.query(sql, (err, result, fields) => {
      if (err) {
        return res.json(err);
      } else if (!result[0]) {
        const date = new Date();
        const sql =
          "INSERT INTO request_job (`user_id`,`job_id`,`response`,`date`) VALUES (?)";
        const values = [
          req.body.user_id,
          req.body.job_id,
          3,
          date.getFullYear() + "-" + date.getMonth() + "-" + date.getDay(),
        ];
        connection.query(sql, [values], (err, data) => {
          if (err) return res.json(err);
          return res.status(201).json(data);
        });
      } else {
        return res
          .status(400)
          .json({ msg: "you have already requested this job" });
      }
    });
  },

  deleteRequest: (req, res) => {
    const user_id = req.params.user_id;
    const job_id = req.params.job_id;
    const sql = `DELETE FROM request_job WHERE user_id = ${user_id} and job_id = ${job_id}`;
    connection.query(sql, (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    });
  },

  getJobs: (req, res) => {
    const sql = ` SELECT *
                  FROM job
                  INNER JOIN job_qualifications 
                      ON job.job_id=job_qualifications.job_id
                  INNER JOIN qualification 
                      ON job_qualifications.qualification_id=qualification.qualification_id`;
    connection.query(sql, (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    });
  },

  getJob: (req, res) => {
    const { id } = req.params;
    const sql = ` SELECT *
                  FROM job
                  INNER JOIN job_qualifications 
                      ON job.job_id=job_qualifications.job_id
                  INNER JOIN qualification 
                      ON job_qualifications.qualification_id=qualification.qualification_id
                      where job.job_id = ${id}`;
    connection.query(sql, (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    });
  },
};
