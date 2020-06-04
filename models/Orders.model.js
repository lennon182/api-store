const { Schema, model } = require("mongoose");

const ordersSchema = new Schema(
  {
    customer: { type: Schema.Types.ObjectId, ref: "Customer" },
    detail: [
      {
        product: { type: Schema.Types.ObjectId, ref: "Product" },
        quantity: { type: Number },
      },
    ],
    discount: { type: Number },
    subtotal: { type: Number },
    total: { type: Number },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Order", ordersSchema);
