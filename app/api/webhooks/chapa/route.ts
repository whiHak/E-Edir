import { NextApiRequest, NextApiResponse } from "next";
import crypto from "crypto";
import { createOrder } from "@/lib/actions/order.actions";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  try {
    const body =  req;
    const order = {
      userId: "Abebe Bikila",
      totalAmount: "1.00",
      chapaId: "3241342142sabcdfdd",
      edirId: "3241342142sabcdfdd",
      createdAt: "2023-02-02T07:53:28.000000Z",
    };
    const newOrder = await createOrder(order);
    return NextResponse.json({ message: "OK", user: body });
  } catch (error) {
    console.error("Error processing webhook:", error);
    // return res.status(500).json({ error: "Server error" });
  }
}
