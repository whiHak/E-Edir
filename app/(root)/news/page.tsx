import React, { MouseEvent, useEffect, useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Post from "@/components/shared/Post";
import { createPost, getEdirPostsByUserId } from "@/lib/actions/post.actions";
import { auth } from "@clerk/nextjs";
import { getUserById } from "@/lib/actions/user.actions";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { revalidatePath } from "next/cache";
import Posts from "@/components/shared/Posts";
import { getEdirById } from "@/lib/actions/edir.actions";
import Link from "next/link";

export type IPost = {
  _id: string;
  userId: {
    _id: string;
    firstName: string;
    lastName: string;
    photo: string;
  };
  content: string;
  edirId: string;
};

const NewsPage = async () => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  const posts = await getEdirPostsByUserId(userId);
  const user = await getUserById(userId);
  const edir = await getEdirById(user.edirId);

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md-py-10">
        <h3 className="wrapper h3-bold text-center sm:text-left">News Feed</h3>
      </section>

      {user.edirId ? (
        <div className="flex flex-col md:flex-row">
          <Posts userId={userId} posts={posts} />

          <div className="w-full  md:pl-3 rounded-md pt-3">
            <img
              src={`${edir.imageUrl}`}
              alt="Edir Image"
              className="w-full md:w-5/6 h-auto rounded-md object-cover md:pl-9 md:pt-0"
            />
            <div className="ml-0 md:ml-8">
              <p className="text-2xl font-bold text-gray-800 mb-1 pt-2">
                {edir.title}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {edir.description}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex-center wrapper min-h-[200px] w-full flex-col gap-3 rounded-[14px]py-28 text-center">
          <h3 className="p-bold-20 md:h5-bold">Not in an Edir Yet?</h3>
          <Link href="/edirs/create">
            <p className="p-regular-14">Create your own!!!</p>
          </Link>
        </div>
      )}
      <ToastContainer />
    </>
  );
};
export default NewsPage;
