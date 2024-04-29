import { NextApiRequest, NextApiResponse } from "next";
import crypto from "crypto";
import { createOrder } from "@/lib/actions/order.actions";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const SECRET_KEY = process.env.NEXT_PUBLIC_TEST_KEY;

  const signature = req.headers.get("chapa-signature") as string;
  if (!signature) {
    // return res.status(400).json({ error: "No signature header provided." });
  }

  const body = req.body;
  const bodyString = JSON.stringify(body);

  const hash = crypto
    .createHmac("sha256", SECRET_KEY!)
    .update(bodyString)
    .digest("hex");

  if (signature !== hash) {
    console.error("Invalid signature, possible tampering detected.");
    // return res.status(403).json({ error: "Invalid signature" });
  }

  // Processing the verified webhook data
  try {
    console.log("Webhook received and verified:", body);

    const {currency,amount,charge,mode,type,status,reference,createdAt} = body as any;
    const order = {
      currency,
      amount,
      charge,
      mode,
      type,
      status,
      reference,
      createdAt
    };
    const newOrder = await createOrder(order);
    return NextResponse.json({ message: "OK", user: newOrder });
  } catch (error) {
    console.error("Error processing webhook:", error);
    // return res.status(500).json({ error: "Server error" });
  }
}
