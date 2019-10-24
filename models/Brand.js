const mongoose = require("mongoose");
const { ObjectID } = require("mongodb");

const Schema = mongoose.Schema;

ObjectID.prototype.valueOf = function() {
    return this.toString();
};

const UserSchema = new Schema({
    description: {
        type: String,
        required: false
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    },


});

module.exports = mongoose.model("Brand", UserSchema);
