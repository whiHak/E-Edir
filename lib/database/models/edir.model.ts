import { model, models, Schema  } from "mongoose";
// import User from "./user.model";
import { Document } from "mongoose";

export interface IEdir extends Document {
  _id: string;
  title: string;
  description?: string;
  location?: string;
  imageUrl?: string;
  price?: string;
  paymentDeadline: string;
  leader?: { _id: string; firstName: string; lastName: string };
  auditor?: { _id:string; firstName: string; lastName: string}
}

const EdirSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  imageUrl: { type: String, required: true },
  price: { type: Number, required: true },
  paymentDeadline: { type: Number, required: true },
  leader: { type: Schema.Types.ObjectId, ref: "User" },
  auditor:{type: Schema.Types.ObjectId, ref:"User"}
});
const Edir = models.Edir || model('Edir', EdirSchema);


export default Edir;
