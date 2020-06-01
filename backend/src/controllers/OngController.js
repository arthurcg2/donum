const Ong = require("../models/OngModel");
const Hasher = require("../utils/hash");

module.exports = {
  async index(req, res) {
    try {
      const ongs = await Ong.findAll({
        attributes: [
          "email",
          "imageUrl",
          "nome",
          "descricao",
          "tipoContatoPrincipal",
          "contatoPrincipal",
          "pais",
          "estado",
          "municipio",
          "bairro",
          "endereco",
        ],
      });

      res.json(ongs);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  },
  async store(req, res) {
    const {
      email,
      password,
      nome,
      descricao,
      tipoContatoPrincipal,
      contatoPrincipal,
      endereco,
      bairro,
      municipio,
      estado,
      pais,
    } = req.body;

    if (password.length < 6)
      return res
        .status(400)
        .json({ error: "Password must be greater then 6 digits" });

    if (tipoContatoPrincipal !== "email" && tipoContatoPrincipal !== "phone") {
      return res.status(400).json({
        error: "The main contact must be a phone number our an email",
      });
    }
    try {
      const existingOng = await Ong.findOne({ where: { email } });
      if (existingOng)
        return res.status(400).json({ error: "Email already registered" });

      const hashedPass = await Hasher.makeHash(password);
      console.log(hashedPass);

      await Ong.create({
        email,
        nome,
        password: hashedPass,
        imageUrl,
        descricao,
        endereco,
        bairro,
        municipio,
        estado,
        pais,
        tipoContatoPrincipal,
        contatoPrincipal,
      });

      return res.sendStatus(200);
    } catch (err) {
      return res.status(400).json({ error: err.errors[0].message });
    }
  },
  async delete(req, res) {
    const { email } = req.params;
    try {
      const existingOng = await Ong.findOne({ where: { email } });
      if (!existingOng)
        return res.status(400).json({ error: "Non existing organization" });
      await existingOng.destroy();
      return res.sendStatus(200);
    } catch (err) {
      return res.status(400).json({ error: err });
    }
  },
  async update(req, res) {
    const { email } = req.params;
    if (!email) return res.sendStatus(400);

    const existingOng = await Ong.findOne({ where: { email } });
    if (!existingOng)
      return res.status(400).json({ error: "Non existing organization" });

    try {
      coeq.body.imageUrl;
      if (req.body.pais) updates.pais = req.body.pais;
      if (req.body.estado) updates.estado = req.body.estado;
      if (req.body.cidade) updates.cidade = req.body.cidade;
      if (req.body.bairro) updates.bairro = req.body.bairro;
      if (req.body.endereco) updates.endereco = req.body.endereco;
      if (req.body.nome) updates.nome = req.body.nome;
      if (req.body.descricao) updates.descricao = req.body.descricao;
      if (req.body.contatoPrincipal)
        updates.contatoPrincipal = req.body.contatoPrincipal;
      if (req.body.tipoContatoPrincipal)
        updates.tipoContatoPrincipal = req.body.tipoContatoPrincipal;

      await existingOng.update(updates);
      return res.sendStatus(200);
    } catch (err) {
      return res.status(400).json({ error: err });
    }
  },

  async login(req, res) {
    const { email, password } = req.body;

    const existingOng = await Ong.findOne({ where: { email } });
    if (!existingOng)
      return res.status(400).json({ error: "Non existing organization" });

    const correctPassword = await Hasher.compareToHash(
      password,
      existingOng.password
    );
    if (correctPassword) return res.sendStatus(200);
    else return res.sendStatus(401);
  },
};
