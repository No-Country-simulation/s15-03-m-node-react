"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("usuarios", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nombre: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      apellido: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      dni: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      contraseña: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      rol: {
        type: Sequelize.ENUM("admin", "user", "superadmin"),
        allowNull: false,
        defaultValue: "user",
      },
      activo: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      tipo: {
        type: Sequelize.ENUM("propietario", "inquilino", "visitante"),
        allowNull: false,
        defaultValue: "visitante",
      },
      estado: {
        type: Sequelize.ENUM("pendiente", "aprobado", "rechazado"),
        allowNull: false,
        defaultValue: "pendiente",
      },
      id_apartamento: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "apartamentos",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "NO ACTION",
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
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("usuarios");
  },
};
