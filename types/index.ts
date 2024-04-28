import { IEdir } from "@/lib/database/models/edir.model";
import { PhoneNumberJSON } from "@clerk/nextjs/server";

export type CreateEdirParams = {
  userId: string;
  edir: {
    title: string;
    description: string;
    location: string;
    imageUrl: string;
    price: string;
  };
};

export type CreateuserPrams = {
  clerkId: string;
  email: string;
  phoneNumber?: PhoneNumberJSON;
  username: string;
  firstName: string;
  lastName: string;
  photo?: string;
};

export type AddMemberToEdirParams = {
  username: string;
  edir: IEdir;
  path: string;
};

export type CheckoutOrderParams = {
  edirTitle: string;
  edirId: string;
  price?: string;
  user: {
    _id: string;
    firstName: string;
    lastName: string;
  }
}
