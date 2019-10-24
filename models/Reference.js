const mongoose = require("mongoose");
const { ObjectID }= require("mongodb");

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
    end: {
        type: String,
    },
    begin: {
        type: String,
    },
    type_id: {
            type: String,
            required: true
        },
    brand_id: {
            type: String,
            required: true
        },
    value: [
        {
            type: Schema.Types.ObjectId,
            ref: "Value"
        }
    ]
});

module.exports = mongoose.model("Reference", UserSchema);
