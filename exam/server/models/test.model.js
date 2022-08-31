const mongoose = require('mongoose');
const testSchema = new mongoose.Schema({
    title: { type: String },
    price: { type: Number },
    description: { type: String }
}, { timestamps: true });
module.exports.Test = mongoose.model('Test', testSchema);