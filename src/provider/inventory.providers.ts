import { InventorySchema } from '../entities/inventory.entity';
import { Connection } from 'mongoose';

export const inventoryProviders = [
    {
        provide: 'INVENTORY_MODEL',
        useFactory: (connection: Connection) => connection.model('inventory', InventorySchema),
        inject: ['DATABASE_CONNECTION'],
    },
];