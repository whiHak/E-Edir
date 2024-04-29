import { model, models, Schema } from "mongoose";

export interface IOrder extends Document {
  // createdAt: Date;
  // chapaId: string;
  // totalAmount: string;
  // edir:string
  // user: {
  //   _id: string;
  //   firstName: string;
  //   lastName: string;
  // };
}

export type IOrderItem = {
    _id: string;
    createdAt: Date;
    totalAmount: string;
    edirTitle: string
    edirId: string;
    user: string;
}

const orderSchema = new Schema({
  // createdAt: {
  //   type: Date,
  //   default: Date.now,
  // },
  // chapaId: {
  //   type: String,
  //   required: true,
  //   unique: true,
  // },
  // totalAmount: {
  //   type: String,
  // },
  edir: {
    type: String,
    required: true
  },
  // user: {
  //   type: Schema.Types.ObjectId,
  //   ref: "User",
  // },
});

const Order = models.Order || model("Order", orderSchema);

export default Order;
