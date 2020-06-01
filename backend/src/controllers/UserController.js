const User = require("../models/UserModel");
const Hasher = require("../utils/hash");

module.exports = {
  async store(req, res) {
    const { email, password, pais, estado, municipio, bairro } = req.body;
    if (password.length < 6)
      return res
        .status(400)
        .json({ error: "Senha tem que ser maior que 6 dígitos" });

    try {
      const existingUser = await User.findOne({ where: { email } });
      if (existingUser)
        return res.status(400).json({ error: "Email já cadastrado" });

      const hashedPass = await Hasher.makeHash(password);

      await User.create({
        email,
        password: hashedPass,
        pais,
        estado,
        municipio,
        bairro,
      });

      return res.sendStatus(200);
    } catch (error) {
      return res.status(400).json({ error: error.errors[0].message });
    }
  },
  async update(req, res) {
    const email = req.params.email;
    if (!email) return res.sendStatus(500);

    const existingUser = await User.findOne({
      where: { email },
    });

    if (!existingUser)
      return res.status(400).json({ error: "Usuário não existe" });

    try {
      const updates = {};
      if (req.body.pais) updates.pais = req.body.pais;
      if (req.body.estado) updates.estado = req.body.estado;
      if (req.body.municipio) updates.municipio = req.body.municipio;
      if (req.body.bairro) updates.bairro = req.body.bairro;

      await existingUser.update(updates);
      return res.sendStatus(200);
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  },
  async delete(req, res) {
    const { email } = req.params;
    const existingUser = await User.findOne({ where: { email } });
    if (!existingUser)
      return res.status(400).json({ error: "Usuário não existe" });

    try {
      await existingUser.destroy();
      return res.sendStatus(200);
    } catch (err) {
      res.status(500).json({ error: err });
    }
  },
  async login(req, res) {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ where: { email } });
    if (!existingUser)
      return res.status(400).json({ error: "Usuário não existe" });

    const correctPassword = await Hasher.compareToHash(
      password,
      existingUser.password
    );
    if (correctPassword) return res.sendStatus(200);
    else return res.sendStatus(401);
  },
};
