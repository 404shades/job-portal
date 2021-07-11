'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RecruiterProfile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Recruiter)
    }
  };
  RecruiterProfile.init({
    website: DataTypes.STRING,
    phone: DataTypes.STRING,
    company_logo: DataTypes.STRING,
    description: DataTypes.TEXT,
    company_address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'RecruiterProfile',
  });
  return RecruiterProfile;
};