"use client";
import { edirFormSchema } from "@/lib/validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Textarea } from "../ui/textarea";
import { useState } from "react";
import { FileUploader } from "./FileUploader";
import { IEdir } from "@/lib/database/models/edir.model";
import { edirDefaultValues } from "@/constants";
import { useUploadThing } from "@/lib/uploadthing";
import { useRouter } from "next/navigation";
import { createEdir, updateEdir } from "@/lib/actions/edir.actions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { revalidatePath } from "next/cache";

type EdirFormProps = {
  userId: string;
  type: "Create" | "Update";
  edir?: IEdir;
  edirId?: string;
};
const EdirForm = ({ userId, type, edir, edirId }: EdirFormProps) => {
  const [files, setFiles] = useState<File[]>([]);
  const initialValues =
    edir && type === "Update"
      ? {
          ...edir,
          price: edir.price?.toString(),
          paymentDeadline: edir.paymentDeadline?.toString(),
        }
      : edirDefaultValues;

  const router = useRouter();
  const { startUpload } = useUploadThing("imageUploader");

  const form = useForm<z.infer<typeof edirFormSchema>>({
    resolver: zodResolver(edirFormSchema),
    defaultValues: initialValues,
  });
  async function onSubmit(values: z.infer<typeof edirFormSchema>) {
    const edirData = values;

    let uploadedImageUrl = edirData.imageUrl;

    if (files.length > 0) {
      const uploadedImages = await startUpload(files);

      if (!uploadedImages) {
        return toast.error("Image not Supported!!!") ;
      }

      uploadedImageUrl = uploadedImages[0].url;
    }

    if (type === "Create") {
      try {
        const newEdir = await createEdir({
          edir: { ...values, imageUrl: uploadedImageUrl },
          userId,
        });

        if (newEdir) {
          form.reset();
          router.push("/my-edirs");
          revalidatePath("/my-edirs")
          window.location.reload();
          toast.success("Edir Created Successfull");
        }
      } catch (error) {
        console.log(error);
      }
    }

    if (type === "Update") {
      try {
        if (!edir || !edirId) {
          router.back();
          return;
        }

        const updatedEvent = await updateEdir({
          userId,
          edir: {
            ...values,
            imageUrl: uploadedImageUrl,
            _id: edirId,
          },
          path: "/my-edirs",
        });

        if(!updatedEvent?.success){
          toast.error(updatedEvent?.message);
        }

        if (updatedEvent?.success) {
          form.reset();
          router.push(`/my-edirs`);
          toast.success("Edir Updated Successfull");
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-5"
      >
        <div className="flex flex-col gap-5 md:flex-row">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    placeholder="Edir title"
                    {...field}
                    className="input-field"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-gray-50 px-4 py-2 ">
                    <Image
                      src="/assets/icons/location.svg"
                      alt="location"
                      width={20}
                      height={20}
                      className=""
                    />
                    <Input
                      placeholder="Edir location"
                      {...field}
                      className="input-field"
                    />
                  </div>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-col gap-5 md:flex-row ">
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl className="h-72">
                  <Textarea
                    placeholder="Description"
                    {...field}
                    className="textarea rounded-2xl "
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="imageUrl"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl className="h-72">
                  <FileUploader
                    onFieldChange={field.onChange}
                    imageUrl={field.value}
                    setFiles={setFiles}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col gap-5 md:flex-row">
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-gray-50 px-4 py-2">
                    <p className="mr-1 p-medium-18 text-grey-500">Br</p>
                    <Input
                      type="text"
                      placeholder="Price"
                      {...field}
                      className="p-regular-16 border-0 bg-gray-50 outline-offset-0 focus:border-0 focus-visible:ring-0 focus:visible:ring-offset-0"
                    />
                  </div>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="paymentDeadline"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-gray-50 px-4 py-2">
                    <Image
                      src="/assets/icons/calendar.svg"
                      alt="calender"
                      width={24}
                      height={24}
                      className="filter-grey"
                    />
                    <Input
                      type="number"
                      placeholder="Payment Deadline within"
                      {...field}
                      className="input-field"
                    />
                    <p className="p-regular-16 px-3">Days</p>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
            control={form.control}
            name="accountNumber"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-gray-50 px-4 py-2 ">
                  <p className="mr-1 p-medium-18 text-grey-500">Ac</p>

                    <Input
                      placeholder="Account Number"
                      {...field}
                      className="input-field"
                    />
                  </div>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

        <Button
          type="submit"
          size="lg"
          disabled={form.formState.isSubmitting}
          className="button w-full"
        >
          {form.formState.isSubmitting ? "Submitting..." : `${type} Edir`}
        </Button>
      </form>
      <ToastContainer />
    </Form>
  );
};

export default EdirForm;
