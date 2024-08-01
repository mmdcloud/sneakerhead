import { Inventory } from '../entity/inventory.entity';

export const catsProviders = [
    {
        provide: 'INVENTORY_REPOSITORY',
        useValue: Inventory,
    },
];