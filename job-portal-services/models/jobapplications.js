'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class JobApplications extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Jobs)
      this.belongsTo(models.JobSeeker)
    }
  };
  JobApplications.init({
    
  }, {
    sequelize,
    modelName: 'JobApplications',
  });
  return JobApplications;
};