// src/services/mock-sms.service.ts

export async function sendAlertSms(to: string, message: string) {
    console.log(`[MOCK SMS] Sending SMS to ${to}`);
    console.log(`[MOCK SMS] Message: ${message}`);
    return {
        sid: 'SMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        status: 'mocked',
        to,
        body: message,
    };
}
