module.exports = app => {
    const akad = require("../controllers/akad.controller.js");

    var router = require("express").Router();

    // Create a new Akad
    router.post("/", akad.create);

    // Retrieve all Akad
    router.get("/", akad.fetchAll);

    app.use("/api/v1/akad", router);
};