const User = require("../models/UserModel");

module.exports = {
  async store(req, res) {
    const { email, password, pais, estado, cidade, bairro } = req.body;

    await User.create({
      email,
      password,
      pais,
      estado,
      cidade,
      bairro,
    });

    return res.sendStatus(200);
  },
  /*async update(req, res) {
    try {
      const { email, password, country, city, state } = req.body;
      User.findByPk(email).then((user) => {});
    } catch (err) {
      return res.status(400).json({ error: err });
    }
  },*/
};
