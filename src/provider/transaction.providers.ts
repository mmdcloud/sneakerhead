import { Transaction } from '../entities/transaction.entity';

export const transactionProviders = [
    {
        provide: 'TRANSACTIONS_REPOSITORY',
        useValue: Transaction,
    },
];