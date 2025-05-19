import 'dotenv/config';
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import Router from '@koa/router';
import { AppDataSource } from './db/data-source';
import userRoutes from './routes/user.routes';
import analyzeRoutes from './routes/analyze.routes';


const app = new Koa();
const router = new Router();

router.use('/users', userRoutes.routes());
router.use('/analyze', analyzeRoutes.routes());

app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());

AppDataSource.initialize().then(() => {
    console.log('Database connected');
    app.listen(3000, () => console.log('Server running on http://localhost:3000'));
}).catch(error => console.error('Database connection error:', error));