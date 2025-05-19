const useMock = process.env.USE_MOCK_SMS === 'true';

export const sendAlertSms = useMock
    ? require('./mock-sms.service').sendAlertSms
    : require('./twilio.service').sendAlertSms;
