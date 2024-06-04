module.exports = (sequelize, DataTypes) => {
  let alias = "Zona";

  let cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    tipo: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    activo: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    id_edificio: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "edificios",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
  };

  let config = {
    tableName: "zonas",
    timestamps: true,
    paranoid: true,
  };

  const Zona = sequelize.define(alias, cols, config);
  Zona.associate = (models) => {
    Zona.belongsTo(models.Edificio, {
      as: "edificio",
      foreignKey: "id_edificio",
    });
    Zona.hasMany(models.Reserva, {
      as: "reservas",
      foreignKey: "id_zona",
    });
  }
  return Zona;
}