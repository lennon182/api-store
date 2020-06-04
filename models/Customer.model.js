const { Schema, model } = require("mongoose");

const customerSchema = new Schema(
  {
    email: { type: String, required: true, unique: true, trim: true },
    name: { type: String, required: true, trim: true },
    password: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    address: { type: String, required: true, trim: true },
    lat: { type: String },
    lng: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Customer", customerSchema);
