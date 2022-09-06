const mongoose = require("mongoose");
const PiratesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
      minlength: [3, "Pirate Name min length is 3"],
    },
    image: {
      type: String,
      required: [true, "Image url is required"],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
    },
    desc: {
      type: String,
      required: [true, "Description is required"],
    },
    location: {
      type: String,
      required: [true, "Location is required"],
    },
    phone: {
      type: Number,
      required: [true, "Phone is required"],
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "User",
      },
  },
  { timestamps: true }
);
module.exports.Pirate = mongoose.model("Pirate", PiratesSchema);
