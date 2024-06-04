module.exports = (sequelize, DataTypes) => {
  const alias = "Apartamento";
  let cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    numero: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    nro_piso: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    id_edificio: {
      type: DataTypes.INTEGER,
      alertNull: false,
      references: {
        model: "edificios",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",  
    },
  };
  let config = {
    tableName: "apartamentos",
    timestamps: true,
    paranoid: true,
  };

  const Apartamento = sequelize.define(alias, cols, config);
  Apartamento.associate = function (models) {
    Apartamento.belongsTo(models.Edificio, {
      as: "edificio",
      foreignKey: "id_edificio",
    });
    Apartamento.hasMany(models.Mascota, {
      as: "mascotas",
      foreignKey: "id_apartamento",
    });
    Apartamento.hasMany(models.Vehiculo, {
      as: "vehiculos",
      foreignKey: "id_apartamento",
    });
  }
  return Apartamento;
}