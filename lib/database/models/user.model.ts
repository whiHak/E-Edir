import { model, models, Schema } from "mongoose";

const UserSchema = new Schema({
    clerkId:{type: String, required:true, unique:true},
    email:{type:String, required: true, unique:true},
    username: {type: String, required:true, unique:true},
    firstName:{type:String, required:true},
    lastName: {type: String, required:true},
    phoneNumber:{type:String, requied:true},
    photo: {type:String, required:true},
    edirId: {type:String},
    role:{type:String}
})

const User = models.User || model("User", UserSchema);
export default User