const router = require('express').Router();
const { response } = require('express');
const fs = require('fs');
const path = require('path');

router.get("/notes", (req, res) => {
    fs.readFile(path.join(__dirname, "../db/db.json"), "utf8", (err, data) => {
        if (err) {
            res.status(500).send(err);
        }
        res.json(data);
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
    fs.writeFile
    })
});

router.delete("/notes/:id", (req, res) => {
    // read db.json, filter and write db.json
    
})
module.exports = router;