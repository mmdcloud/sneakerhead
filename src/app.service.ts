import { Injectable, Inject } from '@nestjs/common';
import { Customer } from './entity/customer.entity';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Injectable()
export class AppService {
  constructor(
    @Inject('CUSTOMERS_REPOSITORY')
    private customersRepository: typeof Customer
  ) { }

  async findAll(): Promise<Customer[]> {
    return this.customersRepository.findAll<Customer>();
  }

  async findOne(id: number): Promise<Customer[]> {
    return this.customersRepository.findAll<Customer>();
  }

  async create(createCustomerDto: CreateCustomerDto): Promise<Customer[]> {
    return this.customersRepository.findAll<Customer>();
  }

  async update(id: number, updateUserDto: UpdateCustomerDto): Promise<Customer[]> {
    return this.customersRepository.findAll<Customer>();
  }

  async remove(id: number): Promise<Customer[]> {
    return this.customersRepository.findAll<Customer>();
  }
}