'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require("bcrypt");
const PROTECTED_ATTRIBUTES = ['password']


const generateHashPassword = (user) => {
  if (user === null) {
    throw new Error("user can not be null");
  } else if (!user.changed("password")) return user.password;
  else {
    return (user.password =
      user.password && user.password !== ""
        ? bcrypt.hashSync(user.password, 10)
        : "");
  }
};
module.exports = (sequelize, DataTypes) => {
  class JobSeeker extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.JobSeekerProfile)
    }
  };
  JobSeeker.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
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
    password: {
      type: DataTypes.STRING(64),
      is: /^[0-9a-f]{64}$/i,

      allowNull: false,
    },
    full_name: {
      type:DataTypes.STRING,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'JobSeeker',
    hooks: {
      beforeCreate: generateHashPassword,
      beforeUpdate: generateHashPassword,
    },
  });
  JobSeeker.prototype.validPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };
  JobSeeker.prototype.toJSON = function () {
    let values = Object.assign({}, this.get());

    for (let a of PROTECTED_ATTRIBUTES) {
      delete values[a]
    }
    return values;
  };
  return JobSeeker;
};