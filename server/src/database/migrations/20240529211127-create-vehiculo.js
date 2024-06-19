"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "vehiculos",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        placa: {
          type: Sequelize.STRING(10),
          allowNull: false,
        },
        modelo: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        color: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        id_apartamento: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: "apartamentos",
            key: "id",
          },
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW,
        },
        deletedAt: {
          allowNull: true,
          type: Sequelize.DATE,
        },
      },
      {
        charset: "utf8",
        collate: "utf8_general_ci",
        engine: "InnoDB",
      }
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("vehiculos");
  },
};
