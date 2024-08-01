import { Injectable, Inject } from '@nestjs/common';
import { Order } from './entity/order.entity';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class AppService {
  constructor(
    @Inject('ORDERS_REPOSITORY')
    private ordersRepository: typeof Order
  ) { }

  async findAll(): Promise<Order[]> {
    return this.ordersRepository.findAll<Order>();
  }

  async findOne(id: number): Promise<Order[]> {
    return this.ordersRepository.findAll<Order>();
  }

  async create(createCustomerDto: CreateOrderDto): Promise<Order[]> {
    return this.ordersRepository.findAll<Order>();
  }

  async update(id: number, updateUserDto: UpdateOrderDto): Promise<Order[]> {
    return this.ordersRepository.findAll<Order>();
  }

  async remove(id: number): Promise<Order[]> {
    return this.ordersRepository.findAll<Order>();
  }
}