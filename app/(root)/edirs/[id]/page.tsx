<<<<<<< HEAD
import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page
=======
import React from "react";

import { DropdownMenuRadioGroupDemo } from "@/components/shared/DropDown";
import { TableDemo } from "@/components/shared/Table";


const Page = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-11 mt-8 space-x-4">  <div className="text-center">
    <span className="text-sm font-medium">Net Worth</span>
    <span className="block text-4xl mt-1 font-extrabold">$ 5122.50</span>
  </div>
  <div className="text-center">
    <span className="text-sm font-medium">Monthly Deposit</span>
    <span className="block text-4xl mt-1 font-extrabold">$ 122.50</span>
  </div>
  <div className="text-center">
    <span className="text-sm font-medium">Withdrawals</span>
    <span className="block text-4xl mt-1 font-extrabold">- $ 122.50</span>
  </div>
</div>
      <div className=" grid grid-cols gap-[32px] h-[530px] p-[50px] ">
        <DropdownMenuRadioGroupDemo/>
        <TableDemo/>
      </div>
    </div>
  );
};

export default Page;
>>>>>>> 32fc3a8835ba83973113190e852e0f7361f926c6
