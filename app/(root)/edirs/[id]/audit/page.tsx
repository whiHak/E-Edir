import React from "react";

import { DropdownMenuRadioGroupDemo } from "@/components/shared/DropDown";
import { TableDemo } from "@/components/shared/Table";


const Page = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-11 mt-8 space-x-4 mx-auto md:flex-row">  
        <div className="text-center">
            <span className="text-sm font-medium">Net Worth</span>
            <span className="block text-4xl mt-1 font-extrabold">1122.50 Br</span>
        </div>
        <div className="text-center">
            <span className="text-sm font-medium">Monthly Deposit</span>
            <span className="block text-4xl mt-1 font-extrabold">122.50 Br</span>
        </div>
        <div className="text-center">
          <span className="text-sm font-medium">Withdrawals</span>
          <span className="block text-4xl mt-1 font-extrabold">-122.50 Br</span>
        </div>
      </div>
      <div className=" grid gap-[32px] h-[530px] p-[50px] ">
        <div>
          <DropdownMenuRadioGroupDemo/>
        </div>
        <TableDemo/>
      </div>
    </div>
  );
};

export default Page;
