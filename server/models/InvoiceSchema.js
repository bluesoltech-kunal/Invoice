import mongoose from "mongoose";

const InvoiceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  size: { type: String },
  qty: { type: Number, required: true },
  rate: { type: Number, required: true },
  amount: { type: Number, required: true },
});

export default mongoose.model("Invoice", InvoiceSchema);
