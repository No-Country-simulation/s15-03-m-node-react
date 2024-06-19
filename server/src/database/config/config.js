require('dotenv').config()
module.exports = {
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "dialect": "mysql",
    "timezone": "America/Argentina/Buenos_Aires",
    "dialectOptions": {
      "useUTC": false,
      "charset": "utf8mb4",
      "collate": "utf8mb4_unicode_ci",
      "supportBigNumbers": true,
      "bigNumberStrings": true,
      "dateStrings": true,
      "typeCast": true,
      "timezone": "local",
      "engine": "INNODB",
      "storageEngine": "INNODB"
    },
    //configuracion de migraciones
    "migrationStorage": "sequelize",
    "migrationStorageTableName": "migrations",

    //configuracion de seeds
    "seedStorage": "sequelize",
    "seedStorageTableName": "seeds"
  },
  "test": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
