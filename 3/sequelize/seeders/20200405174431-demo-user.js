'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert(
      'Users',
      [
        {
          login: 'ivan',
          password: 'qwerty123',
          age: 30,
          isDeleted: false,
        },
        {
          login: 'john',
          password: 'pass111',
          age: 25,
          isDeleted: false,
        },
        {
          login: 'grag',
          password: 'test555',
          age: 35,
          isDeleted: false,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Users', null, {});
  },
};
