import { OrderSchema } from '../entities/order.entity';
import { Connection } from 'mongoose';

export const orderProviders = [
    {
        provide: 'ORDER_MODEL',
        useFactory: (connection: Connection) => connection.model('order', OrderSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];