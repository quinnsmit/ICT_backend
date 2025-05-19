import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from '../entities/User';

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'ICT_backend_db',
    entities: [User],
    synchronize: true,
    logging: false,
});
