import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const MyEdirs = () => {
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:p-10">
        <h3 className="wrapper h3-bold text-center sm:text-left">My Edir</h3>
      </section>
      <div className="w-400 h-250 p-5">
        <div className="bg-white rounded-lg w-max">
          <div className="w-80 h-44 rounded-lg overflow-hidden m-0.5">
            <Image
              src="/assets/images/test.png"
              alt="My-Edir-photo"
              layout="responsive"
              width={80}
              height={44}
            />
          </div>
          <p className="text-gray-600 px-2 pt-2">Mendara kochi</p>
          <div className="flex mb-1 gap-8 justify-between w-full">
            <p className="text-gray-800 py-1 font-bold rounded-full m-0 px-2 ">
              $100.00/mon
            </p>
            <Link href="/edirs/id"><Button className=" py-2 rounded-full " size="sm">
                View Details </Button>
             </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyEdirs;
