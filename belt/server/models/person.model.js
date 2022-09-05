const mongoose = require('mongoose');
const PersonSchema = new mongoose.Schema({
    name: { 
        type: String,
		required: [true, "name is required"],
		minlength:[3,"name min length is 3"] 
    },
    img: { 
        type: String,
		required: [true, "name is required"],
		minlength:[3,"name min length is 3"] 
    },
    num: { 
		type: Number,
		required:[true, "age is required"],
		min:[3,"age min age is 3"]
    },
    catchs: { 
        type: String,
		required: [true, "name is required"],
		minlength:[3,"name min length is 3"]
    },

}, { timestamps: true });
module.exports.Person = mongoose.model("Person", PersonSchema);