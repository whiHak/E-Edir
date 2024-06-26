import AdditionalButtons from "@/components/shared/AdditionalButtons";
import AddMember from "@/components/shared/AddMember";
import CheckoutButton from "@/components/shared/CheckoutButton";
import { getEdirById } from "@/lib/actions/edir.actions";
import { auth } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type SearchParamProps = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
const EdirDetails = async ({
  params: { id },
  searchParams,
}: SearchParamProps) => {
  const {sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  const edir = await getEdirById(id);
  return (
    <>
      <section className="flex justify-center bg-primary-50 bg-dotted-pattern bg-contain">
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:max-w-7xl">
          <Image
            src={edir?.imageUrl}
            alt="hero Image"
            width={1000}
            height={1000}
            className="h-full min-h-[300px] object-cover object-center"
          />
          <div className="flex w-full flex-col gap-8 p-5 md:p-10">
            <div className="flex flex-col gap-6">
              <h2 className="h2-bold">{edir?.title}</h2>

              <div className="flex flex-col gap-5 ">
                <div className="p-regular-20 flex items-center gap-3">
                  <Image
                    src="/assets/icons/location.svg"
                    alt="location"
                    width={32}
                    height={32}
                  />
                  <p className="p-medium-16 lg:p-regular-20">
                    {edir?.location}
                  </p>
                </div>
                <div className="flex gap-2 md:gap-3">
                  <Image
                    src="/assets/icons/calendar.svg"
                    alt="calendar"
                    width={32}
                    height={32}
                  />
                  <div className="p-medium-16 lg:p-regular-20 flex flex-wrap">
                    <p className="">
                      You can make payments during the first:{" "}
                      <span className="p-bold-20">{edir?.paymentDeadline}</span>{" "}
                      days of each month.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center ">
                <p className="p-medium-18 ml-2 mt-2 sm:mt-0">
                  led by{" "}
                  <span className="text-primary-500">
                    {edir?.leader?.firstName} {edir?.leader?.lastName}
                  </span>
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <CheckoutButton edir={edir} userId={userId}/>
              
              <div className="flex-center bg-green-500/10 w-max rounded-full px-5">
                {/* <Image
                  src="/assets/icons/dollar.svg"
                  alt="dollar"
                  width={22}
                  height={22}
                /> */}
                <p className="p-bold-20 rounded-full text-green-700">
                  {`${edir?.price}`}
                </p>
                <p className="ml-1 p-medium-18 text-grey-500">Birr</p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <p className="p-bold-20 text-grey-600">
                Things about this Edir:{" "}
              </p>
              <p className="p-medium-26 lg-p-regular-18">{edir?.description}</p>
            </div>

            <div className="flex">
              <AdditionalButtons edir={edir}/>
            </div>
          </div>
        </div>
      </section>

      <section className="wrapper my-8 flex flex-col gap-8 md:gap-12"></section>

      <ToastContainer />
    </>
  );
};

export default EdirDetails;