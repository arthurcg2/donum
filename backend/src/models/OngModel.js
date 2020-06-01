const { Model, DataTypes } = require("sequelize");

class OngModel extends Model {
  static init(sequelize) {
    super.init(
      {
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            isEmail: {
              msg: "It's necessary to register a valid contact email",
            },
          },
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        imageUrl: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: {
              msg: "Your organization must have a profile image.",
            },
          },
        },
        descricao: {
          type: DataTypes.TEXT,
          allowNull: false,
          validate: {
            notEmpty: {
              msg: "'Description' cannot be empty.",
            },
          },
        },
        nome: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: {
              msg: "'Name' cannot be empty.",
            },
          },
        },
        tipoContatoPrincipal: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        contatoPrincipal: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: {
              msg: "You must fill 'Main Contact'",
            },
          },
        },
        endereco: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: {
              msg: "You must give your organization an adress",
            },
          },
        },
        bairro: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: {
              msg: "Insert your organization's neighborhood",
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
        tableName: "ongs",
        timestamps: false,
      }
    );
  }
}

module.exports = OngModel;
