"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { useState } from "react";

export function DropdownMenuRadioGroupDemo() {
  const [selectedMonth, setSelectedMonth] = useState("Select Month");

  const handleMonthChange = (value: string) => {
    setSelectedMonth(value);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex-center gap-5 " size="lg">
          {selectedMonth}
          <Image
            src="/assets/icons/calendar.svg"
            alt="arrow icon"
            width={20}
            height={20}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuRadioGroup
          value={selectedMonth}
          onValueChange={handleMonthChange}
        >
          <DropdownMenuRadioItem value="SEP">SEP</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="OCT">OCT</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="DEC">DEC</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
