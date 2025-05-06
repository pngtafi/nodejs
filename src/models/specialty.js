'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Specialty extends Model {
    static associate(models) {
      // define association here
    }
  }
  Specialty.init(
    {
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
      modelName: 'Specialty',
    }
  )
  return Specialty
}
