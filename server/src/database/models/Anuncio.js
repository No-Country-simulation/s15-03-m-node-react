module.exports = (sequelize, DataTypes) => {
  
  const alias = "Anuncio";

  let cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    titulo: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    mensaje: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    es_anuncio: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "usuarios",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
  };

  let config = {
    tableName: "anuncios",
    timestamps: true,
    paranoid: true,
  };

  const Anuncio = sequelize.define(alias, cols, config);
  Anuncio.associate = function (models) {
    Anuncio.belongsTo(models.Usuario, {
      as: "usuario",
      foreignKey: "id",
    });
  }
  return Anuncio;
}