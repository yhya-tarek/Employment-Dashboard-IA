const adminAuth = (req, res,next) => {
  const { admin } = req.headers;
  if (admin == 1) {
    next();
  } else {
    res.statusCode = 403;
    res.send({
      massge: "you are Not authorized to enter to this page ",
    });
    next();
  }
};
module.exports = adminAuth;
