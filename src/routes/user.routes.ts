import Router from '@koa/router';
import { AppDataSource } from '../db/data-source';
import { User } from '../entities/User';

const router = new Router();

router.get('/', async (ctx) => {
    const userRepo = AppDataSource.getRepository(User);
    const users = await userRepo.find();
    ctx.body = users;
});

router.post('/', async (ctx) => {
    const userRepo = AppDataSource.getRepository(User);

    // Type assertion to ensure ctx.request.body is treated as partial User
    const userData = ctx.request.body as Partial<User>;

    const newUser = userRepo.create(userData);
    const savedUser = await userRepo.save(newUser);

    ctx.body = savedUser;
});


export default router;