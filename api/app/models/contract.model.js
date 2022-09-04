module.exports = mongoose => {
    var schema = mongoose.Schema({
        name_item: String,
        type_item: String,
    }, { timestamps: true });

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Akad = mongoose.model("akad", schema);
    return Akad;
};