'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class persona extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.reserva, {as:'reservante', foreignKey:'persona_id'})
      this.belongsToMany(models.libro, {through:'reservas', as:'reservacion', foreignKey:'persona_id'})
    }
  }
  persona.init({
    tipo: DataTypes.STRING,
    nombres: DataTypes.STRING,
    apellidos: DataTypes.STRING,
    tipo_documento: DataTypes.STRING,
    nro_documento: DataTypes.STRING,
    correo: DataTypes.STRING,
    contrasenha: DataTypes.STRING,
    foto: DataTypes.TEXT,
    idioma: DataTypes.STRING,
    prefijo: DataTypes.STRING,
    color: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'persona',
  });
  return persona;
};