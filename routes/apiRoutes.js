const router = require('express').Router();
const { note } = require('../db/db.json');
const fs = require('fs');
const path = require('path');

router.get("/notes", (req, res) => {
    fs.readFile(path.join(__dirname, "../db/db.json"), "utf8", (err, data) => {
        const newData = JSON.parse(data);
        if (err) {
            res.status(500).send(err);
        }
        res.send(newData);
    })
});

router.post("/notes", (req, res) => {
    fs.readFile(path.join(__dirname, "../db/db.json"), "utf8", (err, data) => {
        if (err) {
            res.status(500).send(err);
        }
        const oldData=JSON.parse(data);
        // add id to req.body, another key value pair
        const newNote=req.body;
        const newData=[newNote, ...oldData];
        // res.json(newData);
    fs.writeFile(note);
    })
});

router.delete("/notes/:id", (req, res) => {
    // // read db.json, filter and write db.json
    // fs.readFile(path.join(__dirname, "../db/db.json"), "utf8", (err, data) => {
    //     if (err) {
    //         res.status(500).send(err);
    //     }
    //     const

    // })
    
})
module.exports = router;