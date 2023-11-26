'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class reserva extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.persona, {as:'reservante', foreignKey:'persona_id'})
      this.belongsTo(models.libro, {as:'reservado', foreignKey:'libro_id'})
    }
  }
  reserva.init({
    fecha_inicio: DataTypes.DATE,
    fecha_final: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'reserva',
  });
  return reserva;
};