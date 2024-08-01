import { Store } from '../entity/store.entity';

export const storeProviders = [
    {
        provide: 'STORES_REPOSITORY',
        useValue: Store,
    },
];