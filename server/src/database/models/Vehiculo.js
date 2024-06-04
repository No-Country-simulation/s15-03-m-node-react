module.exports = (sequelize, DataTypes) => {
  let alias = "Vehiculo";
  let cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    placa: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    modelo: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    id_apartamento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'apartamentos',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
  };
  let config = {
    tableName: "vehiculos",
    timestamps: true,
    parandize: true
  };
  const Vehiculo = sequelize.define(alias, cols, config);

  Vehiculo.associate = function (models) {
    Vehiculo.belongsTo(models.Apartamento, {
      as: "apartamento",
      foreignKey: "id_apartamento",
    });
  };

  return Vehiculo
}