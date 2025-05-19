// src/routes/analyze.routes.ts
import Router from '@koa/router';
import { AppDataSource } from '../db/data-source';
import { User } from '../entities/User'; // replace with your data entity
import { sendAlertSms } from '../services/sms.service';

const router = new Router();

// Thresholds
const THRESHOLD_EMAIL_LENGTH = 30;

router.post('/', async (ctx) => {
    const userRepo = AppDataSource.getRepository(User);
    const users = await userRepo.find();

    const flagged = users.filter((user) => user.email.length > THRESHOLD_EMAIL_LENGTH);

    if (flagged.length > 0) {
        const smsBody = `ALERT: ${flagged.length} users exceeded the email length threshold.`;
        await sendAlertSms('+RecipientPhoneNumber', smsBody);
        ctx.body = { success: true, message: 'Threshold exceeded, SMS sent.' };
    } else {
        ctx.body = { success: true, message: 'All values within safe threshold.' };
    }
});

export default router;
