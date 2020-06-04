const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    email: { type: String, required: true, unique: true, trim: true },
    name: { type: String, required: true, trim: true },
    password: { type: String, required: true, trim: true },
    type_user: { type: String, default: "ADMIN" },
  },
  {
    timestamps: true,
  }
);

module.exports = model("User", userSchema);
