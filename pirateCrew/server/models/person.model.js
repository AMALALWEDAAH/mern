const mongoose = require('mongoose');
const PersonSchema = new mongoose.Schema({
    name: { type: String },
    img: { type: String },
    num: { type: Number },
    catchs: { type: String },

}, { timestamps: true });
module.exports.Person = mongoose.model("Person", PersonSchema);

