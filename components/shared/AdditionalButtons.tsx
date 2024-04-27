"use client";

import { IEdir } from "@/lib/database/models/edir.model";
import { useUser } from "@clerk/nextjs";
import AddMember from "./AddMember";
import { Button } from "../ui/button";
import Link from "next/link";
import SetAuditor from "./SetAuditor";

const AdditionalButtons = ({ edir }: { edir: IEdir }) => {
  const { user } = useUser();
  const userId = user?.publicMetadata.userId as string;
  const isLeader = userId === edir?.leader?._id?.toString();
  const isAuditor = userId === edir?.auditor?._id?.toString();

  return (
    <>
      <div className="flex gap-3 flex-wrap">
        {isLeader && <AddMember edir={edir}/>}
        {isLeader && <SetAuditor edir={edir}/>}
        {(isAuditor || isLeader) && (
          <Button className="rounded-full" asChild>
            <Link href={`/edirs/${edir?._id}/audit`}>Payment Details</Link>
          </Button>
        )}
      </div>
    </>
  );
};

export default AdditionalButtons;
