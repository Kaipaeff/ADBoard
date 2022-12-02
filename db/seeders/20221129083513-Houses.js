/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Houses', [{
      user_id: 1,
      price: 3500,
      adress: 'Проезд перемен, Маяковского 9',
      photo: '/img/house/5.jpg',
      size: 101,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      user_id: 1,
      price: 4500,
      adress: 'Площадь надежды, Возрождения 9',
      photo: '/img/house/6.jpg',
      size: 144,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      user_id: 1,
      price: 3800,
      adress: 'Пр-кт энтузиастов, Набережная 12',
      photo: '/img/house/7.jpg',
      size: 170,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 1,
      price: 3500,
      adress: 'Проезд перемен, Маяковского 9',
      photo: '/img/house/5.jpg',
      size: 101,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      user_id: 1,
      price: 4500,
      adress: 'Проспект энтузиастов, Строителей 9',
      photo: '/img/house/6.jpg',
      size: 144,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      user_id: 1,
      price: 3800,
      adress: 'Площадь надежды, Набережная 12',
      photo: '/img/house/7.jpg',
      size: 170,
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      user_id: 1,
      price: 3500,
      adress: 'Бульвар разбитых сердец, Маяковского 9',
      photo: '/img/house/5.jpg',
      size: 101,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 1,
      price: 3500,
      adress: 'Бульвар разбитых сердец, Маяковского 9',
      photo: '/img/house/5.jpg',
      size: 101,
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
