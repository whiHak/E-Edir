import { model, models, Schema } from "mongoose";

export interface IOrder extends Document {
  _id: string;
  edirId: string;
  userId: string;
  accountNumber: string;
  bankId: string;
  bankName: string;
  currency: string;
  amount?: string;
  type?: string;
  status: string;
  reference: string;
  createdAt: string;
}

export type IOrderItem = {
  _id: string;
  edirId: string;
  userId:string;
  accountNumber: string;
  bankId: string;
  bankName: string;
  currency: string;
  amount?: string;
  type?: string;
  status: string;
  reference: string;
  createdAt: string;
};

const orderSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  edirId: { type: Schema.Types.ObjectId, ref: "Edir" },
  accountNumber: { type: String, require: true },
  bankId: { type: String, require: true },
  bankName: { type: String, require: true },
  currency: { type: String, require: true },
  amount: { type: String },
  type: { type: String },
  status: { type: String, require: true },
  reference: { type: String, require: true },
  createdAt: { type: String },
});

const Order = models.Order || model("Order", orderSchema);

export default Order;
