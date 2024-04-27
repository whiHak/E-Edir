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
import { IEdir } from "@/lib/database/models/edir.model";
import { addMemberToEdir } from "@/lib/actions/user.actions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AddMember = ({ edir }: { edir: IEdir }) => {
  const [username, setUsername] = useState("");

  const handleAddMember = async () => {
    const addedUserPromise = await addMemberToEdir({
      username: username.trim(),
      edir,
      path: `/edirs/${edir._id.toString()}`,
    });
    addedUserPromise === 'User added successfully' ? 
      toast.success(addedUserPromise) : 
      toast.error(addedUserPromise);
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button className="rounded-full" size="default">
          Add Member
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-white">
        <AlertDialogHeader>
          <AlertDialogTitle>Add a member to this Eidr</AlertDialogTitle>
          <AlertDialogDescription>
            <Input
              type="text"
              placeholder="Username..."
              className="input-field mt-3"
              onChange={(e) => setUsername(e.target.value)}
            />
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => startTransition(handleAddMember)}>
            Add
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
      <ToastContainer />
    </AlertDialog>
  );
};

export default AddMember;
