db = db.getSiblingDB('pegadaian');

db.createCollection('akads');

db.akads.insertMany([{
    name_item: 'Samsung M21',
    type_item: 'Handphone',
}, ]);