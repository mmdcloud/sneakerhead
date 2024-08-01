import { Inventory } from '../entity/inventory.entity';

export const inventoryProviders = [
    {
        provide: 'INVENTORY_REPOSITORY',
        useValue: Inventory,
    },
];