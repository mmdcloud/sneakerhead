import { Transaction } from '../entity/transaction.entity';

export const transactionProviders = [
    {
        provide: 'TRANSACTIONS_REPOSITORY',
        useValue: Transaction,
    },
];