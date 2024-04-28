// app/api/webhooks/chapa/route.ts
import { NextApiRequest, NextApiResponse } from 'next';
import crypto from 'crypto';

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
    // Retrieve your secret key from environment variables
    const SECRET_KEY = process.env.SECRET_KEY;

    if (!SECRET_KEY) {
        return res.status(500).json({ error: "SECRET_KEY is not defined in the environment variables." });
    }

    // Get headers
    const signature = req.headers['chapa-signature'] as string;
    if (!signature) {
        return res.status(400).json({ error: "No signature header provided." });
    }

    // Get the body as a string to ensure consistent hashing
    const body = await req.body;
    const bodyString = JSON.stringify(body);

    // Verify the HMAC signature
    const hash = crypto.createHmac('sha256', SECRET_KEY)
        .update(bodyString)
        .digest('hex');

    if (signature !== hash) {
        console.error('Invalid signature, possible tampering detected.');
        return res.status(403).json({ error: "Invalid signature" });
    }

    // Processing the verified webhook data
    try {
        console.log('Webhook received and verified:', body);
        // Here you might handle different types of events
        // This is just a placeholder switch statement
        switch (body.event) {
            case 'order.completed':
                // Handle order completed
                break;
            default:
                console.warn('Unhandled event type:', body.event);
        }

        return res.status(200).json({ message: "Webhook received and processed" });
    } catch (error) {
        console.error('Error processing webhook:', error);
        return res.status(500).json({ error: "Server error" });
    }
}
