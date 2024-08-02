import * as mongoose from 'mongoose';

export const Inventory = new mongoose.Schema({
    name: String,
    age: Number,
    breed: String,
}, {
    timestamps: true,
});