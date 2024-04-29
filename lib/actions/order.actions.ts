"use server";
import { CreateOrderParams } from "@/types";
import { connectToDatabase } from "../database";
import Order from "../database/models/order.model";

interface RequestOptionsParams {
  method: "GET";
  headers: Headers;
  body?: string;
  redirect: "follow";
}

export const checkOrder = async (tx_ref: string) => {
  try {
    console.log("Hello from here");
    const apiKey = process.env.NEXT_PUBLIC_TEST_KEY;

    if (!apiKey) {
      throw new Error("API key not found in environment variables.");
    }

    // var myHeaders = new Headers();
    // myHeaders.append(
    //   Content-Type: "application/json",
    //   Authorization: "Bearer " + apiKey,
    // );

    // var raw = "";

    // var requestOptions: RequestOptionsParams = {
    //   method: "GET",
    //   headers: myHeaders,
    //   redirect: "follow",
    // };

    const response = await fetch(`https://api.chapa.co/v1/transaction/verify/${tx_ref}`, {
      method:'get',
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + apiKey,
      },
    });
    console.log(await response.json());
  
  } catch (error) {
    console.error("Error in checkOrder:", error);
  }
};

export const createOrder = async (order: CreateOrderParams) => {
  try {
    await connectToDatabase();

    const newOrder = await Order.create({
      edir:"uuuuuu"
    });

    return JSON.parse(JSON.stringify(newOrder));
  } catch (error) {
    console.log(error);
  }
};
