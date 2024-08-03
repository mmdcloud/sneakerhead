import { Sequelize } from 'sequelize-typescript';
import { Customer } from 'src/customers/entities/customer.entity';

export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: 'mariadb',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: 'Madmax1997#',
                database: 'customers',
            });
            sequelize.addModels([Customer]);
            await sequelize.sync();
            return sequelize;
        },
    },
];