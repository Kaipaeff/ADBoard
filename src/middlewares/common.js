const isAdmin = (req, res, next) => {
  if (req.session.newUser === "Anton") {
    next();
  } else {
    res.redirect("/");
  }
};

module.exports = { isAdmin };
