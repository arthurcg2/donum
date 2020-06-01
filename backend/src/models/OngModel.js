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
              msg: "É necessário cadastrar um email de contato válido",
            },
          },
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        descricao: {
          type: DataTypes.TEXT,
          allowNull: false,
          validate: {
            notEmpty: {
              msg: "Descrição não pode ser vazia.",
            },
          },
        },
        nome: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: {
              msg: "Nome não pode ser vazio.",
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
              msg: "Um contato principal deve existir",
            },
          },
        },
        endereco: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: {
              msg: "O endereço de sua organização deve existir",
            },
          },
        },
        bairro: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: {
              msg: "Insira o bairro de sua organização",
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
        tableName: "ongs",
        timestamps: false,
      }
    );
  }
}

module.exports = OngModel;
