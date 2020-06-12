const User = require('../models/UserModel');
const Ong = require('../models/OngModel');
const Hasher = require('../utils/hash');

module.exports = {
  async store(req, res) {
    const { email, password, pais, estado, municipio, bairro } = req.body;
    if (password.length < 6)
      return res
        .status(400)
        .json({ error: 'Password must be greater then 6 digits' });

    try {
      const existingUser = await User.findOne({ where: { email } });
      if (existingUser)
        return res.status(400).json({ error: 'Email already registered' });

      const existingOng = await Ong.findOne({ where: { email } });
      if (existingOng)
        return res.status(400).json({ error: 'Email already registered' });

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
      if (!error.errors) {
        console.log(error);
        return res.sendStatus(500);
      }
      return res.status(400).json({ error: error.errors[0].message });
    }
  },
  async update(req, res) {
    const id = req.params.id;
    if (!id) return res.sendStatus(500);

    const existingUser = await User.findOne({
      where: { id },
    });

    if (!existingUser) return res.status(400).json({ error: 'User not found' });

    try {
      const updates = {};
      if (req.body.pais) updates.pais = req.body.pais;
      if (req.body.estado) updates.estado = req.body.estado;
      if (req.body.municipio) updates.municipio = req.body.municipio;
      if (req.body.bairro) updates.bairro = req.body.bairro;

      await existingUser.update(updates);
      return res.sendStatus(200);
    } catch (err) {
      return res.statusSend(500);
    }
  },
  async delete(req, res) {
    const { id } = req.params;
    const existingUser = await User.findOne({ where: { id } });
    if (!existingUser) return res.status(400).json({ error: 'User not found' });

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
    if (!existingUser) return res.status(400).json({ error: 'User not found' });

    const correctPassword = await Hasher.compareToHash(
      password,
      existingUser.password
    );
    if (correctPassword) return res.sendStatus(200);
    else return res.sendStatus(401);
  },
};
