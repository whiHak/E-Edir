import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const Posts = () => {
  return (
    <>
      <div className="flex">
        <div className="w-3/4 ml-32">
          <div>
            <div className="p-6 pl-9 font-bold">News</div>
            <div className="flex pl-6 gap-3">
              <Input
                placeholder="Post ideas..."
                className="input-field w-[500px]"
              />
              <Button size="lg" className="rounded-full">
                Post
              </Button>
            </div>
          </div>
          <div className="ml-9 mr-32">
            <div className="flex mt-6">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src="/assets/images/test.png"
                  alt="Image"
                  width={100}
                  height={100}
                  className="object-cover"
                />
              </div>
              <div className="ml-4 flex flex-col justify-center">
                <div>
                  <p className="font-bold text-[12px] text-gray-300">
                    Keep it Simple
                  </p>
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
              </div>
            </div>
            <div className="flex mt-4">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src="/assets/images/test.png"
                  alt="Image"
                  width={100}
                  height={100}
                  className="object-cover"
                />
              </div>
              <div className="ml-4 flex flex-col justify-center">
                <div>
                  <p className="font-bold text-[12px] text-gray-300">
                    Keep it Simple
                  </p>
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
              </div>
            </div>
            <div className="flex mt-4">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src="/assets/images/test.png"
                  alt="Image"
                  width={100}
                  height={100}
                  className="object-cover"
                />
              </div>
              <div className="ml-4 flex flex-col justify-center">
                <div>
                  <p className="font-bold text-[12px] text-gray-300">
                    Keep it Simple
                  </p>
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
              </div>
            </div>
            <div className="flex mt-4">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src="/assets/images/test.png"
                  alt="Image"
                  width={100}
                  height={100}
                  className="object-cover"
                />
              </div>
              <div className="ml-4 flex flex-col justify-center">
                <div>
                  <p className="font-bold text-[12px] text-gray-300">
                    Keep it Simple
                  </p>
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
              </div>
            </div>
            <div className="flex mt-4">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src="/assets/images/test.png"
                  alt="Image"
                  width={100}
                  height={100}
                  className="object-cover"
                />
              </div>
              <div className="ml-4 flex flex-col justify-center">
                <div>
                  <p className="font-bold text-[12px] text-gray-300">
                    Keep it Simple
                  </p>
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
              </div>
            </div>
            <div className="flex mt-4">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src="/assets/images/test.png"
                  alt="Image"
                  width={100}
                  height={100}
                  className="object-cover"
                />
              </div>
              <div className="ml-4 flex flex-col justify-center">
                <div>
                  <p className="font-bold text-[12px] text-gray-300">
                    Keep it Simple
                  </p>
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Separator orientation="vertical" className=" w-[2px]  mt-10 " />
        </div>
        <div className="ml-12 mr-14 w-4/12">
          <p className="ml-16 mt-6 font-bold text-[12px] text-gray-400">
            Members
          </p>
          <div className="flex mt-8 items-center">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <Image
                src="/assets/images/test.png"
                alt="Image"
                width={100}
                height={100}
                className="object-cover"
              />
            </div>
            <div className="ml-4 flex flex-col justify-center">
              <div>
                <p className="font-semibold text-sm text-gray-500 text-nowrap">
                  Keep it simple
                </p>
                <p className="text-[10px] font-bold">Role : member</p>
              </div>
            </div>
            <div>
              <Button
                size="sm"
                className="rounded-full item-center p-4 mt-3 ml-12"
              >
                Remove member
              </Button>
            </div>
          </div>
          <div className="">
            <Separator orientation="horizontal" className="ml-14 w-6/12 mt-5" />
          </div>
          <div className="flex mt-4 items-center">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <Image
                src="/assets/images/test.png"
                alt="Image"
                width={100}
                height={100}
                className="object-cover"
              />
            </div>
            <div className="ml-4 flex flex-col justify-center">
              <div>
                <p className="font-semibold text-sm text-gray-500 text-nowrap">
                  Keep it simple
                </p>
                <p className="text-[10px] font-bold">Role : member</p>
              </div>
            </div>
            <div>
              <Button
                size="sm"
                className="rounded-full item-center p-4 mt-3 ml-12"
              >
                Remove member
              </Button>
            </div>
          </div>
          <div className="">
            <Separator orientation="horizontal" className="ml-14 w-6/12 mt-5" />
          </div>
          <div className="flex mt-4 items-center">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <Image
                src="/assets/images/test.png"
                alt="Image"
                width={100}
                height={100}
                className="object-cover"
              />
            </div>
            <div className="ml-4 flex flex-col justify-center">
              <div>
                <p className="font-semibold text-sm text-gray-500 text-nowrap">
                  Keep it simple
                </p>
                <p className="text-[10px] font-bold">Role : member</p>
              </div>
            </div>
            <div>
              <Button
                size="sm"
                className="rounded-full item-center p-4 mt-3 ml-12"
              >
                Remove member
              </Button>
            </div>
          </div>
          <div className="">
            <Separator orientation="horizontal" className="ml-14 w-6/12 mt-5" />
          </div>
          <div className="flex mt-4 items-center">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <Image
                src="/assets/images/test.png"
                alt="Image"
                width={100}
                height={100}
                className="object-cover"
              />
            </div>
            <div className="ml-4 flex flex-col justify-center">
              <div>
                <p className="font-semibold text-sm text-gray-500 text-nowrap">
                  Keep it simple
                </p>
                <p className="text-[10px] font-bold">Role : member</p>
              </div>
            </div>
            <div>
              <Button
                size="sm"
                className="rounded-full item-center p-4 mt-3 ml-12"
              >
                Remove member
              </Button>
            </div>
          </div>
          <div className="">
            <Separator orientation="horizontal" className="ml-14 w-6/12 mt-5" />
          </div>
          <div className="flex mt-4 items-center">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <Image
                src="/assets/images/test.png"
                alt="Image"
                width={100}
                height={100}
                className="object-cover"
              />
            </div>
            <div className="ml-4 flex flex-col justify-center">
              <div>
                <p className="font-semibold text-sm text-gray-500 text-nowrap">
                  Keep it simple
                </p>
                <p className="text-[10px] font-bold">Role : member</p>
              </div>
            </div>
            <div>
              <Button
                size="sm"
                className="rounded-full item-center p-4 mt-3 ml-12"
              >
                Remove member
              </Button>
            </div>
          </div>
          <div className="">
            <Separator orientation="horizontal" className="ml-14 w-6/12 mt-5" />
          </div>
          <div className="flex mt-4 mb-2 items-center">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <Image
                src="/assets/images/test.png"
                alt="Image"
                width={100}
                height={100}
                className="object-cover"
              />
            </div>
            <div className="ml-4 flex flex-col justify-center">
              <div>
                <p className="font-semibold text-sm text-gray-500 text-nowrap">
                  Keep it simple
                </p>
                <p className="text-[10px] font-bold">Role : member</p>
              </div>
            </div>
            <div>
              <Button
                size="sm"
                className="rounded-full item-center p-4 mt-3 ml-12"
              >
                Remove member
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Posts;
