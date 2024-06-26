import { getEdirById } from "@/lib/actions/edir.actions";
import { getUserById } from "@/lib/actions/user.actions";
import { auth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { DeleteConfirmation } from "./DeleteConfirmation";

const Card = async () => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  const currentUser = await getUserById(userId);
  const edir = await getEdirById(currentUser?.edirId);

  const isLeader = userId === edir?.leader?._id?.toString();
  const isAuditor = userId === edir?.auditor?._id?.toString();

  console.log(currentUser?.edirId);
  return currentUser.edirId ? (
    <div className="group relative flex min-h-[280px] w-full max-w-[300px] flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg md:min-h-[338px] m-5">
      <div
        style={{ backgroundImage: `url(${edir?.imageUrl})` }}
        className="flex-center flex-grow bg-gray-50 bg-cover bg-center text-grey-500"
      >
        {isLeader && (
          <div className="absolute right-2 top-2 flex flex-col gap-4 rounded-xl bg-white p-3 shadow-sm transition-all">
            <Link href={`edirs/${edir._id}/update`}>
              <Image
                src="/assets/icons/edit.svg"
                alt="edit"
                width={20}
                height={20}
              />
            </Link>
            <Link href="">
              <DeleteConfirmation edirId={edir?._id} userId={userId} />
            </Link>
          </div>
        )}
      </div>

      <div className="flex min-h-[130px] flex-col gap-3 p-5 md:gap-4">
        <div className="flex gap-2">
          <span className="p-semibold-14 w-min rounded-full bg-green-100 px-4 py-1 text-green-60">
            {`${edir?.price}Br`}
          </span>

          <div className="flex w-max rounded-full bg-grey-500/10 px-1 py-1">
            <Image
              src="/assets/icons/location.svg"
              alt="location"
              width={20}
              height={20}
              className=""
            />
            <p className="p-semibold-14 text-grey-500 px-1 line-clamp-1">{edir?.location}</p>
          </div>
        </div>

        <Link href={`/edirs/${edir?._id}`}>
          <p className="p-medium-16 md:p-medium-20 line-clamp-2 flex-1 text-black">
            {edir?.title}
          </p>
        </Link>

        <div className="flex-between w-full">
          <p className="p-medium-14 md:p-medium-16 text-grey-600 line-clamp-1">
            {edir?.leader?.firstName} {edir?.leader?.lastName}
          </p>

          {isAuditor ||
            (isLeader && (
              <Link href={`/edirs/${edir?._id}/audit`} className="flex gap-2 ">
                <p className="text-primary-500 text-nowrap">Payment Details</p>
                <Image
                  src="/assets/icons/arrow.svg"
                  alt="arrow"
                  width={10}
                  height={10}
                />
              </Link>
            ))}
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
  );
};

export default Card;
