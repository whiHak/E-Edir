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
    paymentDeadline: string;
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


export type CreateOrderParams = {
  chapaId: string
  edirId: string
  userId: string
  totalAmount: string
  createdAt: string
}

export type UpdateEdirParams = {
  userId: string
  edir: {
    _id: string
    title: string
    imageUrl: string
    description: string
    location: string
    price: string;
    paymentDeadline: string;
    leader?:string
    auditor?:string
  }
  path: string
}

export type UpdateUserParams = {
  firstName: string
  lastName: string
  username: string
  photo: string
}