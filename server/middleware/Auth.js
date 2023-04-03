const authLogin = (req, res, next) => {
  if (!req.session.Email) {
    res.status(401);
    return res.send("You need to sign in");
  }

  next();
};

const authRole = (type) => {
  return (req, res, next) => {
    if (req.session.type !== type) {
      res.status(401);
      return res.send("Not allowed");
    }

    next();
  };
};

module.exports = {
  authLogin,
  authRole,
};
