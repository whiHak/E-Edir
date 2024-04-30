"use server";

import { connectToDatabase } from "../database";
import Post from "../database/models/post.model";
import User from "../database/models/user.model";
import { getUserById } from "./user.actions";

type CreatePostParams = {
    userId: string;
    content: string;
    edirId: string;
}

const populatePost = (query: any) => {
  return query.populate({
    path: "userId",
    model: User,
    select: "_id firstName lastName photo",
  });
};

export const createPost = async(post: CreatePostParams)=> {
    try {
        await connectToDatabase();

        const newPost = Post.create(post)
        if(!newPost) return {success: false,  message:"Post failed"}
        return{success:true, message:"Post Successful"}
    } catch (error) {
        console.log(error)
    }
}

export const getEdirPostsByUserId = async (userId: string) => {
  try {
    await connectToDatabase();

    const user = await getUserById(userId);
    if (user.edirId) {
      const posts = await populatePost(Post.find({ edirId: user.edirId }));
      return JSON.parse(JSON.stringify(posts));
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
};
