module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'Users',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        login: {
          type: Sequelize.STRING,
        },
        password: {
          type: Sequelize.STRING,
        },
        age: {
          type: Sequelize.INTEGER,
        },
        isDeleted: {
          type: Sequelize.BOOLEAN,
        },
        // deletedAt: {
        //   allowNull: false,
        //   type: Sequelize.DATE
        // }
        /* createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      }, */
      },
      {
        charset: 'utf8',
      }
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  },
};
