'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('anuncios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      titulo: {
        type: Sequelize.STRING(100),
        allowNull: true
      },
      mensaje: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      fecha: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      es_anuncio: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      es_incidente: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      es_negocio: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      imagen: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      id_usuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'usuarios',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    },{
      charset: 'utf8',
      collate: 'utf8_general_ci',
      engine: 'InnoDB'
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('anuncios');
  }
};