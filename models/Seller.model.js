const { Schema, model } = require("mongoose");

const sellerSchema = new Schema(
  {
    email: { type: String, required: true, unique: true, trim: true },
    name: { type: String, required: true, trim: true },
    password: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    address: { type: String, required: true, trim: true },
    lat: { type: String, trim: true },
    lng: { type: String, trim: true },
    category: { type: Schema.Types.ObjectId, ref: "Category" },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Seller", sellerSchema);
