'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('libros', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      titulo: {
        type: Sequelize.STRING
      },
      autor: {
        type: Sequelize.STRING
      },
      isbn: {
        type: Sequelize.STRING
      },
      editorial: {
        type: Sequelize.STRING
      },
      tipo: {
        type: Sequelize.STRING
      },
      topicos: {
        type: Sequelize.STRING
      },
      descripcion: {
        type: Sequelize.TEXT
      },
      imagen: {
        type: Sequelize.TEXT,
        defaultValue : ''
      },
      contador: {
        type: Sequelize.INTEGER,
        defaultValue : 0
      },
      ultimo_reservante: {
        type: Sequelize.STRING,
        defaultValue: ''
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('libros');
  }
};