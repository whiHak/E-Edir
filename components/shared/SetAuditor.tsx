import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { startTransition, useState } from "react";
import { setAuditor } from "@/lib/actions/edir.action";
import { IEdir } from "@/lib/database/models/edir.model";

const SetAuditor = ({edir}: {edir:IEdir}) => {
    const [username, setUsername] = useState('')

    const handleSetAuditor = () => {
        setAuditor({
            username: username.trim(),
            edir
        })
    }
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button className="rounded-full" size="default">
          Set Auditor
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-white">
        <AlertDialogHeader>
          <AlertDialogTitle>Set Auditor to this Eidr</AlertDialogTitle>
          <AlertDialogDescription>
            <Input
              type="text"
              placeholder="Username..."
              className="input-field mt-3"
              onChange={(e)=>setUsername(e.target.value)}
            />
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={()=>startTransition(handleSetAuditor)}>Set</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default SetAuditor;
