import React from "react";
import { Button } from "../ui/button";
import { IEdir } from "@/lib/database/models/edir.model";
import { auth } from "@clerk/nextjs";
import { checkoutOrder } from "@/lib/actions/order.actions";
import { getUserById } from "@/lib/actions/user.actions";

const CheckoutButton = async ({
  edir,
  userId,
}: {
  edir: IEdir;
  userId: string;
}) => {
  const user = await getUserById(userId);

  const generateKeyString = () => {
    const date = new Date();
    const month = date.getMonth() + 1; 
    const year = date.getFullYear();
    return `${user.Id}-${year}-${month}`;
  };

  return (
    <form method="POST" action="https://api.chapa.co/v1/hosted/pay">
      <input
        type="hidden"
        name="public_key"
        value="CHAPUBK_TEST-dD6QwcoUurYKOM7K9JqhoiZuwwVg5dwq"
      />
      <input type="hidden" name="tx_ref" value={generateKeyString()} />
      <input type="hidden" name="amount" value={`${edir.price}`} />
      <input type="hidden" name="currency" value="ETB" />
      <input type="hidden" name="first_name" value={`${user.firstName}`} />
      <input type="hidden" name="last_name" value={`${user.lastName}`} />
      <input type="hidden" name="title" value={`${edir.title}`} />
      <input
        type="hidden"
        name="logo"
        value="https://chapa.link/asset/images/chapa_swirl.svg"
      />
      <input
        type="hidden"
        name="callback_url"
        value={`${process.env.NEXT_PUBLIC_CHAPA_RETURN_URL}/${edir._id}`}
      />
      <input
        type="hidden"
        name="return_url"
        value={`${process.env.NEXT_PUBLIC_CHAPA_RETURN_URL}/${edir._id}`}
      />
      <Button type="submit" size="default" className="button sm:w-fit">
        Pay Monthly fee
      </Button>
    </form>
  );
};

export default CheckoutButton;
