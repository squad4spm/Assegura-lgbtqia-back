function adminAuth(req, res, next) {
  if (req.session.user != undefined) {
    next();
  } else {
    res.render('noAccess', {});
  }
}
module.exports = adminAuth;
