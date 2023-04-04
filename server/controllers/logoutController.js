module.exports = {
  logOut: (req, res) => {
    req.session.destroy();
    return res.status(200).send();
  },
};
