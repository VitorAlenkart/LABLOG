const { Sequelize , DataTypes} = require("sequelize");
const db = require("../database/connection");

const Category = db.define(
    'Category',
    {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        slug: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }
)

exports.module = Category;
