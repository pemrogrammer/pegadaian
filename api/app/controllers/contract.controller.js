const db = require("../models");
const Contract = db.contracts;

exports.allCustomerContract = (req, res) => {
    // Contract.find()
    //     .then(data => {
    //         res.send(data);
    //     })
    //     .catch(err => {
    //         res.status(500).send({
    //             message: err.message || "Some error occurred while retrieving tutorials."
    //         });
    //     });

    const data = [{
        name_customer: "Samsudin", // nama pelanggan
        type_item: "Handphone", // jenis barang
        no_telp: null,
        no_id: null,
        insurance_item: null, // jaminan
        loan: null, // pinjaman
        deposit_fee_paid: null, // biaya_titip_terbayar
        arrears: null, //tunggakan
        date_contract: null, // tanggal akad
        due_date: null, // jatuh_tempo
        procedure: null, // prosedur
    }];

    res.send(data);
}

// akad jatuh tempo
exports.contractDueDate = (req, res) => {
    const data = [{
        name_customer: "Amir", // nama pelanggan
        type_item: "Handphone", // jenis barang
        no_telp: null,
        no_id: null,
        insurance_item: null, // jaminan
        loan: null, // pinjaman
        deposit_fee_paid: null, // biaya_titip_terbayar
        arrears: null, //tunggakan
        date_contract: null, // tanggal akad
        due_date: null, // jatuh_tempo
    }];

    res.send(data);
}

exports.keelAuction = (req, res) => {
    const data = [{
        name_customer: "Tejo", // nama pelanggan
        type_item: "Handphone", // jenis barang
        no_telp: null,
        no_id: null,
        insurance_item: null, // jaminan
        loan: null, // pinjaman
        deposit_fee_paid: null, // biaya_titip_terbayar
        date_contract: null, // tanggal akad
        payment_date: null, // tanggal pelunasan
    }];

    res.send(data);
}

// Create and Save a new Contract
exports.store = (req, res) => {
    // Validate request
    if (!req.body.name_item) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    // store a Contract
    const contract = new Contract({
        name_item: req.body.name_item,
        type_item: req.body.type_item,
    });

    // Save Contract in the database
    Contract
        .save(contract)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Tutorial."
            });
        });
};