"use client"
import React, { MouseEvent, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { auth } from "@clerk/nextjs";
import { getUserById } from "@/lib/actions/user.actions";
import { createPost } from "@/lib/actions/post.actions";
import { toast } from "react-toastify";
import { revalidatePath } from "next/cache";
import Post from "./Post";
import { IPost } from "@/app/(root)/news/page";

const Posts = ({userId, posts}:{userId:string, posts:any}) => {
  
  
  const[post, setPost] = useState("");
  
  const handlePost = async (event: MouseEvent<HTMLButtonElement>) => {
    const user = await getUserById(userId);
    const nPost = {
      userId,
      content: post,
      edirId: user.edirId,
    };
    const newPost = await createPost(nPost);
    if (newPost?.success) {
      toast.success("Message Posted");
      setPost("")
    }

  };

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row gap-4 p-4 m-2 pt-1">
        <Input
          placeholder="Post ideas..."
          className="ml-0 md:ml-8 px-2 py-5 border rounded-full bg-gray-100 focus:outline-none w-full md:w-1/2"
          onChange={(e) => setPost(e.target.value)}
          value={post}
        />
        <Button className="rounded-full" size="lg" onClick={handlePost}>
          Post
        </Button>
      </div>

      <div className="flex flex-col gap-4 p-3 md:p-4 md:pl-12 rounded-md h-[370px] overflow-scroll ">
        {posts?.map((post: IPost) => <Post post={post} />)}
      </div>
    </div>
  );
};

export default Posts;
