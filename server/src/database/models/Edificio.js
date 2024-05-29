module.exports = (sequelize, DataTypes) => {
  alias = "Edificio";

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
    cant_pisos: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    id_residencia: {
      type: DataTypes.INTEGER,
      alertNull: false,
      references: {
        model: "Residencias",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
  };
  let config = {
    tableName: "edificios",
    timestamps: true,
    paranoid: true,
  };
  const Edificio = sequelize.define(alias, cols, config);
  Edificio.associate = function (models) {
    Edificio.belongsTo(models.Residencia, {
      as: "residencia",
      foreignKey: "id_residencia",
    });
    Edificio.hasMany(models.Apartamento, {
      as: "apartamentos",
      foreignKey: "id_edificio",
    });
  }
  return Edificio;
}