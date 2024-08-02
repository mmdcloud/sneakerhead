import { Document } from 'mongoose';

export interface IInventory extends Document {
    readonly name: string;
    readonly age: number;
    readonly breed: string;
}