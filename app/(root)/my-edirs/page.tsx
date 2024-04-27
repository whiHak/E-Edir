import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Card from "@/components/shared/Card";

const MyEdirs = () => {
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:p-10">
        <h3 className="wrapper h3-bold text-center sm:text-left">My Edir</h3>
      </section>     

      <Card />
    </>
  );
};

export default MyEdirs;
