module.exports = (sequelize, DataTypes) => {
  let alias = "Mascota";
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
    tipo: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    raza: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    activa: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    id_apartamento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "apartamentos",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
  };
  let config = {
    tableName: "mascotas",
    timestamps: true,
    paranoid: true,
  };
  const Mascota = sequelize.define(alias, cols, config);
  Mascota.associate = function (models) {
    Mascota.belongsTo(models.Apartamento, {
      as: "apartamento",
      foreignKey: "id_apartamento",
    });
  };
  return Mascota;
};
