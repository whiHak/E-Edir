import { NextApiRequest, NextApiResponse } from "next";
import crypto from "crypto";
import { createOrder } from "@/lib/actions/order.actions";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
    const order = {
      currency: "ETB",
      amount: "1.00",
      charge: "96e41186-29ba-4e30-b013-2ca36d7e7025",
      mode: "Commercial Bank of Ethiopia (CBE)",
      type: "Payout",
      status: "success",
      reference: "3241342142sabcdfdd",
      createdAt: "2023-02-02T07:53:28.000000Z",
    };
    const newOrder = await createOrder(order);
    return NextResponse.json({ message: "OK", user: newOrder });
}
