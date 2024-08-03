import { Sequelize } from 'sequelize-typescript';
import { Transaction } from '../entities/transaction.entity';

export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: 'Madmax1997#',
                database: 'transactions',
            });
            sequelize.addModels([Transaction]);
            await sequelize.sync();
            return sequelize;
        },
    },
];