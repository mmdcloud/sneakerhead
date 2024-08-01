import { Sequelize } from 'sequelize-typescript';
import { Order } from '../entity/order.entity';

export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: 'password',
                database: 'nest',
            });
            sequelize.addModels([Order]);
            await sequelize.sync();
            return sequelize;
        },
    },
];