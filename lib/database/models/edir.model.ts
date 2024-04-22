import { Schema } from "mongoose";
import User from "./user.model";

const EdirSchema = new Schema({
    title:{type:String, required:true},
    description:{type:String, required:true},
    location:{type:String, required:true},
    imageUrl:{type:String, required:true},
    price:{type:Number, required:true},
    paymentDate:{type:Number, required:true},
    leader:{type: Schema.Types.ObjectId, ref:"User"}
})