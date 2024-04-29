import { NextApiRequest, NextApiResponse } from "next";
import crypto from "crypto";
import { createOrder } from "@/lib/actions/order.actions";

export async function POST(req: Request, res: Response) {
  // Retrieve your secret key from environment variables
  const SECRET_KEY = process.env.NEXT_PUBLIC_TEST_KEY;

  
  // Get headers
  const signature = req.headers.get("chapa-signature") as string;
  if (!signature) {
    // return res.status(400).json({ error: "No signature header provided." });
  }

  // Get the body as a string to ensure consistent hashing
  const body = req.body;
  const bodyString = JSON.stringify(body);

  // Verify the HMAC signature
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
    // Here you might handle different types of events
    // This is just a placeholder switch statement
    const order = {
      userId: "Abebe Bikila",
      totalAmount: "1.00",
      chapaId: "3241342142sabcdfdd",
      edirId: "3241342142sabcdfdd",
      createdAt: "2023-02-02T07:53:28.000000Z",
    };
    await createOrder(order);
    // return res.status(200).json({ message: "Webhook received and processed" });
  } catch (error) {
    console.error("Error processing webhook:", error);
    // return res.status(500).json({ error: "Server error" });
  }
}
