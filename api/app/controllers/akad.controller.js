const db = require("../models");
const Akad = db.akads;

exports.fetchAll = (req, res) => {

    Akad.find()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving tutorials."
            });
        });
}

// Create and Save a new Akad
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name_item) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    // Create a Akad
    const akad = new Akad({
        name_item: req.body.name_item,
        type_item: req.body.type_item,
    });

    // Save Akad in the database
    akad
        .save(akad)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Tutorial."
            });
        });
};