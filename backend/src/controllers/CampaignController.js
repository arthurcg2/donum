const Campaign = require('../models/CampaignModel.js');
const Ong = require('../models/OngModel.js');

function validateDates(start, end) {
  if (!(start instanceof Date && !isNaN(start))) return false;
  if (!(end instanceof Date && !isNaN(start))) return false;

  if (end - start <= 0) return false;

  return true;
}

module.exports = {
  async store(req, res) {
    const {
      email,
      descricao,
      titulo,
      municipio,
      emergencia,
      estado,
      pais,
    } = req.body;

    const dataValidade = new Date(req.body.dataValidade);
    const dataCriacao = new Date();

    if (!validateDates(dataCriacao, dataValidade))
      return res
        .status(400)
        .json({ error: 'Ending or starting date is invalid.' });

    const ong = await Ong.findOne({ where: { email } });
    if (!ong) {
      return res
        .status(400)
        .json({ error: 'There is no NGO registered with this email.' });
    }

    const existingCampaign = await Campaign.findOne({ where: { email } });
    if (existingCampaign) {
      return res
        .status(400)
        .json({ error: 'A NGO must have only one campaign at a time.' });
    }
    try {
      await Campaign.create({
        email,
        descricao,
        titulo,
        dataCriacao,
        dataValidade,
        municipio,
        estado,
        pais,
        emergencia,
      });
      return res.sendStatus(200);
    } catch (err) {
      if (!err.errors) {
        console.log(err);
        return res.sendStatus(500);
      }
      return res.status(400).json({ error: err.errors[0].message });
    }
  },
  async delete(req, res) {
    const { id } = req.params;
    const existingCampaign = await Campaign.findOne({ where: { id } });
    if (!existingCampaign)
      return res.status(400).json({ error: "Campaign doesn't exist" });

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
      where: { id: req.params.id },
    });
    if (!existingCampaign) {
      return res.status(400).json({ error: "Campaign doesn't exist" });
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
  async specific(req, res) {
    const { id } = req.params;
    const existingCampaign = await Campaign.findOne({ where: { id } }); //id aqui
    if (!existingCampaign)
      return res
        .status(400)
        .json({ error: 'There is no campaign with this id' });
    try {
      res.status(200).json({
        id: existingCampaign.id,
        email: existingCampaign.email,
        descricao: existingCampaign.descricao,
        titulo: existingCampaign.titulo,
        dataValidade: existingCampaign.dataValidade,
        dataCriacao: existingCampaign.dataCriacao,
        municipio: existingCampaign.municipio,
        estado: existingCampaign.estado,
        pais: existingCampaign.pais,
        emergencia: existingCampaign.emergencia,
      });
    } catch (err) {
      console.log(err);
      return res.sendStatus(500);
    }
  },
};
