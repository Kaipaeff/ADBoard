/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Houses', [{
      user_id: 1,
      price: 3500,
      adress: 'Маяковского 9',
      photo: '/img/house/5.jpg',
      size: 101,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      user_id: 1,
      price: 4500,
      adress: 'Дачная 9',
      photo: '/img/house/6.jpg',
      size: 144,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      user_id: 1,
      price: 3800,
      adress: 'Набережная 12',
      photo: '/img/house/7.jpg',
      size: 170,
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
