const Sequelize = require("sequelize");
const dbConfig = require("../config/database.js");

const User = require("../models/UserModel");
const Ong = require("../models/OngModel");
const Campaign = require("../models/CampaignModel");

const connection = new Sequelize(dbConfig);

User.init(connection);
Ong.init(connection);
Campaign.init(connection);

module.exports = connection;
