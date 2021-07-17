const router = require('express').Router();
const { note } = require('../db/db.json');
const fs = require('fs');
const path = require('path');

router.get("/notes", (req, res) => {
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        const oldData = JSON.parse(data);
        res.send(oldData);
        console.log(oldData);
        if (err) {
            res.status(500).send(err);
        }
    });
});

router.post("/notes", (req, res) => {
    const { newNote } = req;
    console.log(newNote);
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        const oldData=JSON.parse(data);
        // add id to req.body, another key value pair
        const newNote=req.body;
        const newData=[newNote, ...oldData];
        res.send(newData);
    fs.writeFile("../db/db.json", "utf8", (err) => {
        if (err) {
            res.status(500).send(err);
        }
    });
    })
});

router.delete("/notes/:id", (req, res) => {
    // read db.json, filter and write db.json
    const { id } = req.params;
    let doNotDel;
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        const oldData = JSON.parse(data);
        if (err) {
            res.status(500).send(err);
        }
        doNotDel = oldData.filter((note) => {
            return note.id !== id;
        });
        console.log(oldData);
        fs.writeFile("./db/db.json", JSON.stringify(doNotDel), (err) => {
            if (err) {
                res.status(500).send(err);
            }
        });
        res.send(doNotDel)
    });  
});
module.exports = router;