const { Model, DataTypes } = require("sequelize");

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            isEmail: {
              msg: "Esse não é um endereço de email válido",
            },
          },
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: {
              msg: "Senha não pode ser vazia.",
            },
            len: {
              args: [6, 50],
              msg: "Senha tem que ser maior que 6 dígitos",
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
        cidade: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: {
              msg: "Cidade não pode ser vazia.",
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
        bairro: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: {
              msg: "Bairro não pode ser vazio.",
            },
          },
        },
      },
      {
        sequelize,
        tableName: "users",
        timestamps: false,
      }
    );
  }
}

module.exports = User;
