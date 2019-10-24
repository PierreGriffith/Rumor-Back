const mongoose = require("mongoose");
const { ObjectID } =  require("mongodb");

const Schema = mongoose.Schema;

ObjectID.prototype.valueOf = function() {
    return this.toString();
};

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },

    brand_id:
        {
            type: String,
            required: true
        }
    ,


});

module.exports = mongoose.model("Type", UserSchema);
