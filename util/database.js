const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-project", "root", "sql@password25", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
