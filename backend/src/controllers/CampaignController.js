const Campaign = require("../models/CampaignModel.js");
const Ong = require("../models/OngModel.js");

function validateDate(d) {
  return d instanceof Date && !isNaN(d);
}

module.exports = {
  async store(req, res) {
    const { email, descricao, titulo, municipio, estado, pais } = req.body;

    const dataValidade = new Date(req.body.dataValidade);
    const dataCriacao = new Date(req.body.dataCriacao);

    if (!validateDate(dataCriacao))
      return res.status(400).json({ error: "A data de criação é invalida." });
    if (!validateDate(dataValidade))
      return res.status(400).json({ error: "A data de criação é invalida." });

    const ong = await Ong.findOne({ where: { email } });
    if (!ong) {
      return res
        .status(400)
        .json({ error: "Não existe uma ONG cadastrada com este email." });
    }
    if (email !== ong.email)
      return res.status(400).json({ error: "Email da ONG inválido." });

    const existingCampaign = await Campaign.findOne({ where: { email } });
    if (existingCampaign) {
      return res
        .status(400)
        .json({ error: "Uma ONG só pode ter uma campanha por vez." });
    }
    try {
      await Campaign.create({
        email,
        descricao,
        titulo,
        dataValidade,
        dataCriacao,
        municipio,
        estado,
        pais,
      });
      return res.sendStatus(200);
    } catch (err) {
      return res.status(400).json({ error: err.errors[0].message });
    }
  },
  async delete(req, res) {
    const { email } = req.params;
    const existingCampaign = await Campaign.findOne({ where: { email } });
    if (!existingCampaign)
      return res.status(400).json({ error: "Campanha não existe" });

    try {
      await existingCampaign.destroy();
      return res.sendStatus(200);
    } catch (err) {
      return res.status(400).json({ error: err });
    }
  },
  async index(req, res) {
    const { titulo, municipio, estado, pais } = req.query;
    const queries = {};
    try {
      if (titulo) queries.titulo = titulo;
      if (municipio) queries.municipio = municipio;
      if (estado) queries.estado = estado;
      if (pais) queries.pais = pais;
      await Campaign.findAll({ where: queries }).then((campanhas) => {
        return res.status(200).json(campanhas);
      });
    } catch (err) {
      return res.status(400).json({ error: err });
    }
  },
  async update(req, res) {
    const existingCampaign = await Campaign.findOne({
      where: { email: req.params.email },
    });
    if (!existingCampaign) {
      return res.status(400).json({ error: "Esta campanha não existe" });
    }
    try {
      const updates = {};
      if (req.body.descricao) updates.descricao = req.body.descricao;
      if (req.body.estado) updates.estado = req.body.estado;
      if (req.body.municipio) updates.municipio = req.body.municipio;
      if (req.body.titulo) updates.titulo = req.body.titulo;
      await existingCampaign.update(updates);

      return res.sendStatus(200);
    } catch (err) {
      return res.status(400).json({ error: err });
    }
  },
};
