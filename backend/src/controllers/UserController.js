const User = require("../models/UserModel");

module.exports = {
  async store(req, res) {
    const { email, password, country, city, state } = req.body;
    console.log(User);
    const user = await User.create({
      email,
      password,
      country,
      city,
      state,
    });
    console.log(user);
    return res.status(200);
  },
  async update(req, res) {
    try {
      const { email, password, country, city, state } = req.body;
      User.findByPk(email).then((user) => {});
    } catch (err) {
      return res.status(400).json({ error: err });
    }
  },
};
