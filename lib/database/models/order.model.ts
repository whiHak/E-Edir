import { model, models, Schema } from "mongoose";

export interface IOrder extends Document {
  _id: string;
  edirId: string;
  userId: string;
  currency: string;
  amount?: string;
  charge: string;
  mode: string;
  type?: string;
  status: string;
  reference: string;
  createdAt: string;
}

export type IOrderItem = {
  _id: string;
  edirId: string;
  userId:string;
  currency: string;
  amount?: string;
  charge:string;
  mode:string;
  type?: string;
  status: string;
  reference: string;
  createdAt: string;
};

const orderSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  edirId: { type: Schema.Types.ObjectId, ref: "Edir" },
  currency: { type: String, require: true },
  amount: { type: String },
  charge: { type: String, require: true },
  mode: { type: String, require: true },
  type: { type: String },
  status: { type: String, require: true },
  reference: { type: String, require: true },
  createdAt: { type: String },
});

const Order = models.Order || model("Order", orderSchema);

export default Order;
