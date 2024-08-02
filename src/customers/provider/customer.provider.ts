import { Customer } from '../entities/customer.entity';

export const customerProviders = [
    {
        provide: 'CUSTOMER_REPOSITORY',
        useValue: Customer,
    },
];