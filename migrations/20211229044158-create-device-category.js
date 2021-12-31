'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Device_categories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      primary: {
        type: Sequelize.STRING
      },
      secondary: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      junctionId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'Junctions',
            // schema: 'schema'
            key: 'id'
          },
        },
        allowNull: false
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Device_categories');
  }
};
