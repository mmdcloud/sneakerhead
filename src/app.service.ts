import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Model } from 'mongoose';
import { IOrder } from './interfaces/order.interface';

@Injectable()
export class AppService {
  constructor(
    @Inject('INVENTORY_MODEL')
    private orderModel: Model<IOrder>,
  ) { }

  async findAll(): Promise<IOrder[]> {
    const records = await this.orderModel.find();
    if (!records || records.length == 0) {
      throw new NotFoundException('Inventory data not found!');
    }
    return records;
  }

  async findOne(id: string): Promise<IOrder> {
    const record = await this.orderModel.findById(id).exec();
    if (!record) {
      throw new NotFoundException(`Inventory #${record} not found`);
    }
    return record;
  }

  async create(createOrderDto: CreateOrderDto): Promise<IOrder> {
    var record = new this.orderModel(createOrderDto);
    return record.save();
  }

  async update(id: number, updateOrderDto: UpdateOrderDto): Promise<IOrder> {
    const record = await this.orderModel.findByIdAndUpdate(id, updateOrderDto, { new: true });
    if (!record) {
      throw new NotFoundException(`Inventory #${record} not found`);
    }
    return record;
  }

  async remove(id: string): Promise<IOrder> {
    const record = await this.orderModel.findByIdAndDelete(id);
    if (!record) {
      throw new NotFoundException(`Inventory #${id} not found`);
    }
    return record;
  }
}