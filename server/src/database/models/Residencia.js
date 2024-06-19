module.exports = (sequelize, DataTypes) => {
  alias = "Residencia";

  let cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    cuit: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    direccion: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    telefono: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    codigo: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    validez_codigo: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  };

  let config = {
    tableName: "residencias",
    timestamps: true,
    paranoid: true,
  };
  const Residencia = sequelize.define(alias, cols, config);
  Residencia.associate = function (models) {
    Residencia.hasMany(models.Edificio, {
      as: "edificios",
      foreignKey: "id_residencia",
    });
  }
  return Residencia;
};
