const express = require("express");
const router = express.Router();

const Article = require("./Article");

router.get("/add", (req, res) => {
    res.render("article/add.ejs");
})

router.post("/add", (req,res) => {
    try{
        Article.create({
            
        })
    }catch(err) {
        console.log(err)
    }
})

module.exports = router;