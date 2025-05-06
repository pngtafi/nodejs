'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Clinic extends Model {
    static associate(models) {
      // define association here
    }
  }
  Clinic.init(
    {
      address: DataTypes.STRING,
      description: DataTypes.TEXT,
      image: DataTypes.STRING,
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      sequelize,
      modelName: 'Clinic',
    }
  )
  return Clinic
}
