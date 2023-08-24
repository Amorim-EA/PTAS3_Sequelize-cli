'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('pessoas', [
     
      {
        name: 'John Doe',
        password: 'senha123',
        email: 'jonh@gmail.com',
        telefone: '6799504-2434'
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('pessoas', null, {});
  }
};