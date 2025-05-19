// src/services/twilio.service.ts
import { Twilio } from 'twilio/lib';

const accountSid = 'your_account_sid';
const authToken = 'your_auth_token';
const fromNumber = '+1234567890'; // Your Twilio number

const client = new Twilio(accountSid, authToken);

export async function sendAlertSms(to: string, message: string) {
    return client.messages.create({
        body: message,
        from: fromNumber,
        to,
    });
}
