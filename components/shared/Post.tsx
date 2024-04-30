import { IPost } from "@/app/(root)/news/page";
import Image from "next/image";
import React from "react";

const Post = ({ post }: { post: IPost }) => {
  console.log(post);
  return (
    <div className="flex flex-row gap-1 items-center">
      <img
        src={`${post?.userId?.photo}`}
        alt="user logo"
        className="w-11 h-11 rounded-full"
      />
      <div className="flex justify-between items-center ">
        <div className="flex flex-col bg-white rounded-full px-4">
          <p className="text-sm text-gray-400 text-nowrap">
            {post?.userId?.firstName} {post?.userId?.lastName}
          </p>
          <p className="text-gray-600 font-bold w-full">{post?.content}</p>
        </div>
        <p className="hidden items-center font-bold text-gray-500 text-xs ml-32 md:24 line-clamp-1 sm:block">Just now</p>
      </div>
    </div>
  );
};

export default Post;
