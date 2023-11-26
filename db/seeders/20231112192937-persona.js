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
    await queryInterface.bulkInsert('personas', 
    
    [
      {
        tipo: "admin",
        nombres: "soyadmin",
        apellidos: "administrador",
        tipo_documento: "dni",
        nro_documento: "77777777",
        correo: "admin@ulima.edu.pe",
        contrasenha: "admin",
        foto: "/Juan.png",
        idioma: "Ingles",
        prefijo: "Sr",
        color: "#7785bb"
      },
      {
        tipo: "user",
        nombres: "Juan Carlos",
        apellidos: "Bodoque",
        tipo_documento: "dni",
        nro_documento: "77777777",
        correo: "user@ulima.edu.pe",
        contrasenha: "user",
        foto: "/juancarlos.jpg"
      },
      {
        tipo: "user",
        nombres: "Tulio",
        apellidos: "Trivino",
        tipo_documento: "dni",
        nro_documento: "88888888",
        correo: "user2@ulima.edu.pe",
        contrasenha: "user2",
        foto: "/tulio.jpg"
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
