"use strict";
const { Model, UUIDV4, UUID } = require("sequelize");
const bcrypt = require("bcrypt");

const PROTECTED_ATTRIBUTES = ['password']


const generateHashPassword = (recruiter) => {
  if (recruiter === null) {
    throw new Error("Recruiter can not be null");
  } else if (!recruiter.changed("password")) return recruiter.password;
  else {
    return (recruiter.password =
      recruiter.password && recruiter.password !== ""
        ? bcrypt.hashSync(recruiter.password, 10)
        : "");
  }
};
module.exports = (sequelize, DataTypes) => {
  class Recruiter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(model) {
      // define association here
      this.hasMany(model.Jobs)
      this.hasOne(model.RecruiterProfile)
    }
  }
  Recruiter.init(
    {
      id: {
        type: UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      company_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          args: true,
          msg: "Company with this name already exists",
        },
      },

      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          args: true,
          msg: "User already exists",
        },
        validate: {
          isEmail: {
            args: true,
            msg: "Email is not valid",
          },
        },
      },
      recuiter_name: DataTypes.STRING,
      password: {
        type: DataTypes.STRING(64),
        is: /^[0-9a-f]{64}$/i,

        allowNull: false,
      },
    },

    {
      sequelize,
      modelName: "Recruiter",
      hooks: {
        beforeCreate: generateHashPassword,
        beforeUpdate: generateHashPassword,
      },
    }
  );
  Recruiter.prototype.validPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };
  Recruiter.prototype.toJSON = function () {
    let values = Object.assign({}, this.get());

    for (let a of PROTECTED_ATTRIBUTES) {
      delete values[a]
    }
    return values;
  };
  return Recruiter;
};
