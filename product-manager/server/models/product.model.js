const mongoose = require('mongoose');
const PoductSchema = new mongoose.Schema({
    title: { 
        type: String,
		
    },
    desc: { 
        type: String
    },
    price: { 
		type: Number
    }

}, { timestamps: true });
module.exports.Product = mongoose.model("Product", PoductSchema);