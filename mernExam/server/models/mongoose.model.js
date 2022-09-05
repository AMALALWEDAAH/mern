const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "name is required"],
		minlength:[3,"name min length is 3"]
	},
	age: {
		type: Number,
		required:[true, "age is required"],
		min:[3,"age min age is 3"]
	}
});

const User = mongoose.model("User", UserSchema);

module.exports = User;