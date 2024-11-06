const Sequelize = require("sequelize");
require('dotenv').config()

const db = new Sequelize("blog", process.env.USERNAMEDB, process.env.PASSWORD, {
    host: "localhost",
    dialect: "mysql"
});


module.exports = db;