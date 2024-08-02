import { CustomerAddress } from '../entities/customer_address.entity';

export const customerAddressProviders = [
    {
        provide: 'CUSTOMER_ADDRESS_REPOSITORY',
        useValue: CustomerAddress,
    },
];