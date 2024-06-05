module.exports = (sequelize, DataTypes) => {
  let alias = "Reserva";

  let cols = {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    inicio: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    fin: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    id_zona: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "zonas",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "NO ACTION",
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
    tableName: "reservas",
    timestamps: true,
    paranoid: true,
  };
  const Reserva = sequelize.define(alias, cols, config);
  Reserva.associate = function (models) {
    Reserva.belongsTo(models.Zona, {
      as: "zona",
      foreignKey: "id_zona",
    });
    Reserva.belongsTo(models.Usuario, {
      as: "usuario",
      foreignKey: "id_usuario",
    });
  }
  return Reserva;
};
