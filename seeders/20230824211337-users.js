'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        name: 'John Doe',
        password: 'senha111',
        email: 'jonh@gmail.com',
        telefone: '6799785-2434'
      },
      {
        name: 'John Amorim',
        password: 'senha222',
        email: 'amorim@gmail.com',
        telefone: '6799844-2434'
      },
      {
        name: 'John da Silva',
        password: 'senha333',
        email: 'silva@gmail.com',
        telefone: '6799554-2434'
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('users', null, {});
  }
};