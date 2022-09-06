const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
var uniqueValidator = require("mongoose-unique-validator");
const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name is required"],
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      validate: {
        validator: (val) => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
        message: "Please enter a valid email",
      },
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [8, "Password must be 8 characters or longer"],
    },

    
  },
  { timestamps: true }
);

UserSchema.virtual("confirmPassword")
  .get(() => this._confirmPassword)
  .set((value) => (this._confirmPassword = value));

UserSchema.path("password").validate(function () {
  if (this.password != this.confirmPassword) {
    this.invalidate("confirmPassword", "Password do not match");
  }
});

UserSchema.pre("save", function (next) {
  if (!this.isModified("password")) {
    next();
  } else {
    bcrypt.hash(this.password, 10).then((hash) => {
      this.password = hash;
      next();
    });
  }
});

UserSchema.plugin(uniqueValidator);
// make the User schema and export
module.exports.User = mongoose.model("User", UserSchema);
