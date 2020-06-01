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
              msg: "Insert your organization email.",
            },
          },
        },
        descricao: {
          type: DataTypes.TEXT,
          allowNull: false,
          validate: {
            notEmpty: {
              msg: "Give your campaign a description.",
            },
          },
        },
        titulo: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: {
              msg: "Give your campaign a name.",
            },
          },
        },
        dataValidade: {
          type: DataTypes.DATE,
          allowNull: false,
          validate: {
            isDate: {
              msg: "Expiration date must be a valid date.",
            },
          },
        },
        emergencia: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        dataCriacao: {
          type: DataTypes.DATE,
          allowNull: false,
          validate: {
            isDate: {
              msg: "Creation date must be a valid date.",
            },
          },
        },
        municipio: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: {
              msg: "'County' cannot be empty.",
            },
          },
        },
        estado: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: {
              msg: "'State' cannot be empty.",
            },
          },
        },
        pais: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: {
              msg: "'Country' cannot be empty.",
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
