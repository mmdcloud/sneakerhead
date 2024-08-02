import { Injectable, Inject } from '@nestjs/common';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { UpdateInventoryDto } from './dto/update-inventory.dto';
import { Model } from 'mongoose';
import { Inventory } from './entities/inventory.entity';

@Injectable()
export class AppService {
    constructor(
        @Inject('INVENTORY_MODEL')
        private inventoryModel: Model<typeof Inventory>,
    ) { }

    async findAll(): Promise<typeof Inventory[]> {
        return this.inventoryModel.find().exec();
    }

    async findOne(id: string): Promise<typeof Inventory> {
        return this.inventoryModel.findById<typeof Inventory>(id);
    }

    async create(createInventoryDto: CreateInventoryDto): Promise<typeof Inventory> {
        var inventory = new this.inventoryModel(createInventoryDto);
        return inventory.save();
    }

    async update(id: number, updateInventoryDto: UpdateInventoryDto): Promise<Inventory[]> {
        return this.inventoryRepository.findAll<Inventory>();
    }

    async remove(id: string): Promise<typeof Inventory> {
        var inventory = this.inventoryModel.findById(id);
        return await inventory.deleteOne();
    }
}