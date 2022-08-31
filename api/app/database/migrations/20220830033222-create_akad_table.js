module.exports = {
    async up(db) {
        await db.collection('default').updateOne({ name_item: 'Samsung M21' }, { $set: { blacklisted: true } });
        // await db.collection('albums').updateOne({ artist: 'The Doors' }, { $set: { stars: 5 } });
    },

    async down(db) {
        await db.collection('default').updateOne({ name_item: 'Samsung M21' }, { $set: { blacklisted: false } });
        // await db.collection('albums').updateOne({ artist: 'The Doors' }, { $set: { stars: 0 } });
    },
};