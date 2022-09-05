const mongoose = require('mongoose');
const PersonSchema = new mongoose.Schema({
    name: { 
        type: String,
		required: [true, "name is required"]
    },
    img: { 
        type: String,
		required: [true, "img is required"]
    },
    num: { 
		type: Number,
		required:[true, "num is required"]
    },
    catchs: { 
        type: String,
		required: [true, "catchs is required"]
    },

}, { timestamps: true });
module.exports.Person = mongoose.model("Person", PersonSchema);