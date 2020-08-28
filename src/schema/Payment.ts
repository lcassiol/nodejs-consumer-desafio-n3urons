import { Schema } from "mongoose";

const Payment = new Schema({
  totalPrice: { type: Number },
  order_id: { type: Number },
  card_number: { type: String },
  card_validate: { type: String },
});

export default Payment;
