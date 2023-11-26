'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return (
      queryInterface.addColumn(
      "reservas", // name of Source model
      "persona_id", // name of the key we're adding
      {
        type: Sequelize.INTEGER,
        references: {
          model: "personas", // name of Target model
          key: "id", // key in Target model that we're referencing
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      }
    )
    &&
    queryInterface.addColumn(
      "reservas", // name of Source model
      "libro_id", // name of the key we're adding
      {
        type: Sequelize.INTEGER,
        references: {
          model: "libros", // name of Target model
          key: "id", // key in Target model that we're referencing
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      }
    )
    )
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    
  }
};
