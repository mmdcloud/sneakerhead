
import { Document } from 'mongoose';

export interface IOrder extends Document {
    readonly name: string;
    readonly age: number;
    readonly breed: string;
}
