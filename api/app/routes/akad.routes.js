module.exports = app => {
    const contract = require("../controllers/contract.controller.js");

    var router = require("express").Router();

    // Create a new contract
    router.post("/", contract.store);

    // seluruh data nasabah akad
    router.get("/all-customer-contract", contract.allCustomerContract);
    // harian nasabah akad
    router.get("/contract-due-date", contract.contractDueDate);
    // pelunasan, lelang, dan refund
    router.get("/keel-auction", contract.keelAuction);

    app.use("/api/v1/akad", router);
};