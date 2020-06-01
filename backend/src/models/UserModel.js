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
              msg: "Insert a valid email adress",
            },
          },
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: {
              msg: "'Password' must not be empty.",
            },
          },
        },
        pais: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: {
              msg: "'Country' must not be empty.",
            },
          },
        },
        municipio: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: {
              msg: "'County' must not be empty.",
            },
          },
        },
        estado: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: {
              msg: "'State' must not be empty.",
            },
          },
        },
        bairro: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notEmpty: {
              msg: "'Neighborhood' must not be empty.",
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
