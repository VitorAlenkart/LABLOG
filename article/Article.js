const { type } = require("express/lib/response");
const db = require("../database/connection");
const { Sequelize , DataTypes } = require("sequelize");

const Article = db.define(
    'Article', 
    {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        body: {
            type: DataTypes.STRING,
            allowNull: false
        },
        slug: {
            type: DataTypes.STRING,
            allowNull: false
        }

    }
)

module.exports = Article;