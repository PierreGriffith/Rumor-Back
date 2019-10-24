const mongoose = require ("mongoose");
const { ObjectID } = require ("mongodb");

const Schema = mongoose.Schema;

ObjectID.prototype.valueOf = function() {
    return this.toString();
};

const UserSchema = new Schema({
    link: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    brand_id:
        {
            type: String,
            required: true
        }
    ,
    reference_id:
        {
            type: String,
            required: true
        },
   type_id:
        {
            type: String,
            required: true
        },
    user_id:
        {
            type: String,
        },
    sell:{
        type : Boolean
    }
});

module.exports = mongoose.model("Value", UserSchema);
