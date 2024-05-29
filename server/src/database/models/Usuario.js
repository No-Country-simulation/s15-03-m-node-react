module.exports = (sequelize, DataTypes) => {
  const alias = "Usuario";
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
    apellido: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    dni: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    contraseña: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    rol: {
      type: DataTypes.ENUM("admin", "user", "superadmin"),
      allowNull: false,
      defaultValue: "user",
    },
    activo: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    tipo: {
      type: DataTypes.ENUM("propietario", "inquilino", "visitante"),
      allowNull: false,
      defaultValue: "visitante",
    },
    estado: {
      type: DataTypes.ENUM("pendiente", "aprobado", "rechazado"),
      allowNull: false,
      defaultValue: "pendiente",
    },
    id_apartamento: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "apartamentos",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "NO ACTION",
    },
  };
  let config = {
    tableName: "usuarios",
    timestamps: true,
    paranoid: true,
  };
  const Usuario = sequelize.define(alias, cols, config);
  Usuario.associate = function (models) {
    Usuario.belongsTo(models.Apartamento, {
      as: "apartamento",
      foreignKey: "id_apartamento",
    });
  };
  return Usuario;
};
