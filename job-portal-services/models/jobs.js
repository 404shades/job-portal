'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Jobs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      this.belongsTo(models.Recruiter);
      this.belongsTo(models.JobCategory);
    }
  };
  Jobs.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    job_description: DataTypes.TEXT,
    job_title: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    is_active:{type:DataTypes.BOOLEAN,defaultValue:true},
    last_date_to_apply:DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Jobs',
  });
  return Jobs;
};