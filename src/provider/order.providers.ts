import { Order } from '../entity/order.entity';

export const orderProviders = [
    {
        provide: 'ORDERS_REPOSITORY',
        useValue: Order,
    },
];