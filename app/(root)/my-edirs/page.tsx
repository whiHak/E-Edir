import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Card from "@/components/shared/Card";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "@clerk/nextjs";
import { getUserById } from "@/lib/actions/user.actions";

const MyEdirs = async () => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  const user = await getUserById(userId);
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:p-10">
        <h3 className="wrapper h3-bold text-center sm:text-left">My Edir</h3>
      </section>

      {user.edirId ? (
        <Link href={`/edirs/${user.edirId}`}>
          <Card />
        </Link>
      ) : (
        <Card />
      )}
      <ToastContainer />
    </>
  );
};

export default MyEdirs;
