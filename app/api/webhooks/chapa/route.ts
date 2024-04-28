// pages/api/webhook.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import crypto from 'crypto';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const secret = process.env.SECRET_KEY as string;

        try {
            const signature = req.headers['chapa-signature'] as string;
            const calculatedHash = crypto.createHmac('sha256', secret)
                .update(JSON.stringify(req.body))
                .digest('hex');

            if (signature === calculatedHash) {
                const event = req.body;
                console.log('Webhook received and verified:', event);

                res.status(200).send('Webhook received and processed');
            } else {
                console.log('Invalid signature, possible tampering detected.');
                res.status(403).send('Invalid signature');
            }
        } catch (error) {
            console.error('Error processing webhook:', error);
            res.status(500).send('Server error');
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
