'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Apartments', [{
      user_id: 1,
      price: 2500,
      adress: 'Пугачева 21',
      photo: '/img/apart/3.jpg',
      size: 74,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
