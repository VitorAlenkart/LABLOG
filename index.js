async function main() {
    const express = require("express");
    const router = express.Router();
    const app = express();
    const bodyParser = require("body-parser");

    app.use(express.static('public'))

    app.use(express.urlencoded({extends:false}))
    app.use(express.json());



    const articleController = require("./article/articlesController");

    const Article = require("./article/Article");
    const Category = require("./category/Category");

    const db = require("./database/connection");

    // Conectando ao banco de dados
    db.authenticate().then(() => {
        console.log('Connection has been established successfully.');
     }).catch((error) => {
        console.error('Unable to connect to the database: ', error);
     });

    // Estou dizendo para o Express usar o EJS como View engine
    app.set('view engine','ejs');

    app.get("/", (req,res) => {
        res.render("index.ejs");
    })

    app.use("/",articleController);

    app.listen(8080,()=>{
        console.log("App rodando!");
        
    });
}
main()