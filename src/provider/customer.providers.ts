import { Customer } from '../entity/customer.entity';

export const catsProviders = [
    {
        provide: 'CUSTOMERS_REPOSITORY',
        useValue: Customer,
    },
];