/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Apartments', [{
      user_id: 1,
      price: 2500,
      adress: 'Пугачева 21',
      photo: '/img/apart/3.jpg',
      size: 74,
      floor: 11,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      user_id: 1,
      price: 2900,
      adress: 'Власова 21',
      photo: '/img/apart/4.jpg',
      size: 88,
      floor: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      user_id: 1,
      price: 3900,
      adress: 'Некрасова 119',
      photo: '/img/apart/5.jpg',
      size: 91,
      floor: 17,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 1,
      price: 2900,
      adress: 'Власова 21',
      photo: '/img/apart/4.jpg',
      size: 88,
      floor: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 1,
      price: 2500,
      adress: 'Пугачева 21',
      photo: '/img/apart/3.jpg',
      size: 74,
      floor: 11,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      user_id: 1,
      price: 2900,
      adress: 'Власова 21',
      photo: '/img/apart/4.jpg',
      size: 88,
      floor: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      user_id: 1,
      price: 3900,
      adress: 'Некрасова 119',
      photo: '/img/apart/5.jpg',
      size: 91,
      floor: 17,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 1,
      price: 2900,
      adress: 'Власова 21',
      photo: '/img/apart/4.jpg',
      size: 88,
      floor: 1,
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
