/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Flats', [{
      user_id: 1,
      price: 1000,
      adress: 'Кропоткина 3',
      photo: '/img/flat/2.jpg',
      size: 24,
      floor: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      user_id: 1,
      price: 1200,
      adress: 'Пушкина 24',
      photo: '/img/flat/1.jpg',
      size: 19,
      floor: 15,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      user_id: 1,
      price: 2000,
      adress: 'Калатушкина 14',
      photo: '/img/flat/3.jpg',
      size: 27,
      floor: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      user_id: 1,
      price: 900,
      adress: 'Заводская 14',
      photo: '/img/flat/4.jpg',
      size: 18,
      floor: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 1,
      price: 1000,
      adress: 'Кропоткина 3',
      photo: '/img/flat/2.jpg',
      size: 24,
      floor: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      user_id: 1,
      price: 1200,
      adress: 'Пушкина 24',
      photo: '/img/flat/1.jpg',
      size: 19,
      floor: 15,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      user_id: 1,
      price: 2000,
      adress: 'Калатушкина 14',
      photo: '/img/flat/3.jpg',
      size: 27,
      floor: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      user_id: 1,
      price: 900,
      adress: 'Заводская 14',
      photo: '/img/flat/1.jpg',
      size: 18,
      floor: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
