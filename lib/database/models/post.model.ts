import { model, models, Schema } from "mongoose";

const postSchema =  new Schema({
    userId:{type: Schema.Types.ObjectId, ref: "User"},
    content:{type:String, required:true},
    edirId:{type: Schema.Types.ObjectId, ref: "Edir",}
})

const Post = models.Post || model("Post", postSchema);

export default Post;