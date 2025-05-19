// src/services/twilio.service.ts
import { Twilio } from 'twilio/lib';

const accountSid = process.env.TWILION_SID;
const authToken = process.env.TWILION_AUTH;
const fromNumber = '+1234567890'; // Your Twilio number

const client = new Twilio(accountSid, authToken);

export async function sendAlertSms(to: string, message: string) {
    return client.messages.create({
        body: message,
        from: fromNumber,
        to,
    });
}
