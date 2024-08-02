import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { UpdateInventoryDto } from './dto/update-inventory.dto';
import { Model } from 'mongoose';
import { IInventory } from './interfaces/inventory.interface';

@Injectable()
export class AppService {
    constructor(
        @Inject('INVENTORY_MODEL')
        private inventoryModel: Model<IInventory>,
    ) { }

    async findAll(): Promise<IInventory[]> {
        const records = await this.inventoryModel.find();
        if (!records || records.length == 0) {
            throw new NotFoundException('Inventory data not found!');
        }
        return records;
    }

    async findOne(id: string): Promise<IInventory> {
        const record = await this.inventoryModel.findById(id).exec();
        if (!record) {
            throw new NotFoundException(`Inventory #${record} not found`);
        }
        return record;
    }

    async create(createInventoryDto: CreateInventoryDto): Promise<IInventory> {
        var record = new this.inventoryModel(createInventoryDto);
        return record.save();
    }

    async update(id: number, updateInventoryDto: UpdateInventoryDto): Promise<IInventory> {
        const record = await this.inventoryModel.findByIdAndUpdate(id, updateInventoryDto, { new: true });
        if (!record) {
            throw new NotFoundException(`Inventory #${record} not found`);
        }
        return record;
    }

    async remove(id: string): Promise<IInventory> {
        const record = await this.inventoryModel.findByIdAndDelete(id);
        if (!record) {
            throw new NotFoundException(`Inventory #${id} not found`);
        }
        return record;
    }
}