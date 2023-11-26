'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('reservas', 
    
    [
      {
        fecha_inicio: new Date("2023-09-01"),
        fecha_final: new Date("2023-09-11"),
        persona_id: "2",
        libro_id: "1"
      },
      {
        fecha_inicio: new Date("2023-09-12"),
        fecha_final: new Date("2023-09-22"),
        persona_id: "2",
        libro_id: "2"
      },
      {
        fecha_inicio: new Date("2023-09-23"),
        fecha_final: new Date("2023-10-03"),
        persona_id: "2",
        libro_id: "1"
      },
      {
        fecha_inicio: new Date("2023-10-04"),
        fecha_final: new Date("2023-10-14"),
        persona_id: "3",
        libro_id: "2"
      },
      {
        fecha_inicio: new Date("2023-11-15"),
        fecha_final: new Date("2023-12-10"),
        persona_id: "3",
        libro_id: "3"
      }
    ]
    
    , {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
