"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "residencias",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        nombre: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        cuit: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        direccion: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        telefono: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        codigo: {
          type: Sequelize.UUID,
          allowNull: false,
        },
        validez_codigo: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        deletedAt: {
          type: Sequelize.DATE,
          allowNull: true,
        },
      },
      {
        charset: "utf8mb4",
        collate: "utf8mb4_unicode_ci",
        engine: "InnoDB",
      }
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("residencias");
  },
};
