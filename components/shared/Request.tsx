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
  import { setAuditor } from "@/lib/actions/edir.actions";
  import { IEdir } from "@/lib/database/models/edir.model";
  import { toast, ToastContainer } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
  
  const Request = () => {  
    const handleRequest = async () => {
        toast.success("Requested Successfully")
    };
    return (
      <AlertDialog>
        <AlertDialogTrigger>
          <Button className="rounded-full" size="default">
            Request Claim
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="bg-white">
          <AlertDialogHeader>
            <AlertDialogTitle>Please provide the Account and Amount</AlertDialogTitle>
            <AlertDialogDescription>
              <Input
                type="text"
                placeholder="Account Number..."
                className="mt-3"
              />
            </AlertDialogDescription><AlertDialogDescription>
              <Input
                type="text"
                placeholder="Amount..."
                className=""
              />
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={() => startTransition(handleRequest)}>
              Request
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
        <ToastContainer />
      </AlertDialog>
    );
  };
  
  export default Request;
  