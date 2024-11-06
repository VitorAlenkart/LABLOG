const express = require("express");
const router = express.Router();

const Article = require("./Article");

router.get("/add", (req, res) => {
    res.render("article/add.ejs");
})

router.post("/add", (req,res) => {
    const data = req.body;
    try{
        console.log(data);
        res.redirect("/")
    }catch(err) {
        console.log(err)
    }
})

module.exports = router;