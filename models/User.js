const mongoose =  require("mongoose");
const { ObjectID } = require("mongodb");

const Schema = mongoose.Schema;

ObjectID.prototype.valueOf = function() {
  return this.toString();
};

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
    password: {
    type: String,
    required: true
  },
   birthday: {
        type: String,
        required: true
    },
    creation: {
        type: String,
        required: true
    },
    newsletter: {
        type: Boolean,
        required: true
    },
    admin: {
        type: Boolean,
        required: true
    },

});

module.exports = mongoose.model("User", UserSchema);
