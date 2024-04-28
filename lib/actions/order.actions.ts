import { CheckoutOrderParams, CreateOrderParams } from "@/types";
import { connectToDatabase } from "../database";
import Order from "../database/models/order.model";

interface RequestOptionsParams {
  method: "POST";
  headers: Headers;
  body: string;
  redirect: "follow";
}

export const checkoutOrder = async (order: CheckoutOrderParams) => {
  try {
    console.log("Hello from here")
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "CHAPUBK_TEST-dD6QwcoUurYKOM7K9JqhoiZuwwVg5dwq");
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      amount: order.price,
      currency: "ETB",
      first_name: order.user.firstName,
      last_name: order.user.lastName,
      tx_ref: `${order.user._id}-6669`,
      callback_url: "https://webhook.site/077164d6-29cb-40df-ba29-8a00e59a7e60",
      return_url: `${process.env.CHAPA_RETURN_URL}/${order.edirId}`,
      "customization[title]": order.edirTitle,
    });

    const requestOptions: RequestOptionsParams = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://api.chapa.co/v1/transaction/initialize", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  } catch (error) {
    console.error("Error in checkoutOrder:", error);
  }
};

export const createOrder = async (order: CreateOrderParams) => {
  try {
      await connectToDatabase();
    
      const newOrder = await Order.create({
          ...order,
          edir: order.edirId,
          user: order.userId
      })

      return JSON.parse(JSON.stringify(newOrder));
  } catch (error) {
      console.log(error);
  }
}