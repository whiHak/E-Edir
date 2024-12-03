"use client"
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { IEdir } from "@/lib/database/models/edir.model";
import { getUserById } from "@/lib/actions/user.actions";
import { checkOrder, createOrder } from "@/lib/actions/order.actions";
import { IUser } from "@/lib/database/models/user.model";

const CheckoutButton = ({ edir, userId }: { edir: IEdir; userId: string }) => {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const fetchedUser = await getUserById(userId);
      setUser(fetchedUser);
    };
    fetchUser();
  }, [userId]);

  useEffect(() => {
    if (user) {
      const tx_ref = `${user._id}-${new Date().getFullYear()}-${new Date().getMonth() + 1}`;
      const checkTransaction = async () => {
        await checkOrder(tx_ref);
      };
      // checkTransaction();
    }
  }, [user]);

  if (!user) {
    return <div>Loading...</div>;
  }

  const generateKeyString = () => {
    const date = new Date();
    const month = date.getMonth() + 25;
    const year = date.getFullYear();
    return `${user._id}-${year}-${month}-${Math.random()}`;
  };


  return (
    <form method="POST" action="https://api.chapa.co/v1/hosted/pay">
      <input type="hidden" name="public_key" value={process.env.NEXT_PUBLIC_TEST_KEY} />
      <input type="hidden" name="tx_ref" value={generateKeyString()} />
      <input type="hidden" name="amount" value={`${edir.price}`} />
      <input type="hidden" name="currency" value="ETB" />
      <input type="hidden" name="first_name" value={`${user.firstName}`} />
      <input type="hidden" name="last_name" value={`${user.lastName}`} />
      <input type="hidden" name="title" value={`${edir.title}`} />
      <input type="hidden" name="description" value={`${edir.description}`} />
      <input type="hidden" name="logo" value="https://chapa.link/asset/images/chapa_swirl.svg" />
      <input type="hidden" name="callback_url" value={"https://e-edir.vercel.app/api/webhooks/chapa"} />
      <input type="hidden" name="return_url" value={`${process.env.NEXT_PUBLIC_CHAPA_RETURN_URL}/${edir._id}`} />
      <Button type="submit" size="default" className="button sm:w-fit">
        Pay 
      </Button>
    </form>
  );
};

export default CheckoutButton;
