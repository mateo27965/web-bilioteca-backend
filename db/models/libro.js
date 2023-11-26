'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class libro extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.reserva, {as:'reservado', foreignKey:'libro_id'})
      this.belongsToMany(models.persona, {through:'reservas', as:'reservacion', foreignKey:'libro_id'})
    }
  }
  libro.init({
    titulo: DataTypes.STRING,
    autor: DataTypes.STRING,
    isbn: DataTypes.STRING,
    editorial: DataTypes.STRING,
    tipo: DataTypes.STRING,
    topicos: DataTypes.STRING,
    descripcion: DataTypes.TEXT,
    imagen: DataTypes.TEXT,
    contador: DataTypes.INTEGER,
    ultimo_reservante: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'libro',
  });
  return libro;
};