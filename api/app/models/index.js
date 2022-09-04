const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.database = "pegadaian";
db.tutorials = require("./tutorial.model.js")(mongoose);
db.contracts = require("./contract.model.js")(mongoose);

module.exports = db;