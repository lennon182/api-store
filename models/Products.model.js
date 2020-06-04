const { Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    price: { type: Number, required: true, trim: true },
    unit: { type: String, required: true, trim: true },
    img: { type: String, required: true, trim: true },
    stock: { type: Number, required: true, trim: true },
    seller: { type: Schema.Types.ObjectId, ref: "Seller", required: false },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Product", productSchema);
