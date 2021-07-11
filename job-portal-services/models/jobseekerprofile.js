'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class JobSeekerProfile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.JobSeeker)
    }
  };
  JobSeekerProfile.init({
    gender: DataTypes.STRING,
    cv_path: DataTypes.STRING,
    date_of_birth: DataTypes.DATE,
    phone: {type:DataTypes.STRING},
    short_description: {type:DataTypes.TEXT}
  }, {
    sequelize,
    modelName: 'JobSeekerProfile',
  });
  return JobSeekerProfile;
};