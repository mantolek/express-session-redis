function profile(req, res) {
  return res.status(200).json(req.session);
}

module.exports = { profile };
