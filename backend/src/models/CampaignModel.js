const { Model, DataTypes } = require("sequelize");

class CampaignModel extends Model {
  static init(sequelize) {
    super.init(
      {
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            isEmail: {
              msg: "Insira o email da sua organização.",
            },
          },
        },
        descricao: {
          type: DataTypes.TEXT,
          allowNull: false,
          validate: {
            notEmpty: {
              msg: "Dê uma descrição a sua campanha.",
            },
          },
        },
        titulo: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: {
              msg: "Dê um nome a sua campanha.",
            },
          },
        },
        dataValidade: {
          type: DataTypes.DATE,
          allowNull: false,
          validate: {
            isDate: {
              msg: "Data de validade de ve ser uma data válida.",
            },
          },
        },
        dataCriacao: {
          type: DataTypes.DATE,
          allowNull: false,
          validate: {
            isDate: {
              msg: "Data de criação de ve ser uma data válida.",
            },
          },
        },
        municipio: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: {
              msg: "Município não pode ser vazio.",
            },
          },
        },
        estado: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: {
              msg: "Estado não pode ser vazio.",
            },
          },
        },
        pais: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: {
              msg: "País não pode ser vazio.",
            },
          },
        },
      },
      {
        sequelize,
        tableName: "campaigns",
        timestamps: false,
      }
    );
  }
}

module.exports = CampaignModel;
