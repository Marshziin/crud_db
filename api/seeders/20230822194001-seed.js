'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Usuarios', [
        {
          user: 'cocacola2k',
          password: 'cocacola-cool123',
          email: 'ilycoca@coca.com',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user: 'mananger',
          password: 'imanger-cool123',
          email: 'fuckseelers@mananger.com',
          createdAt: new Date(),
          updatedAt: new Date()
        }
    ], {});

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('People', null, {});
  }
};
