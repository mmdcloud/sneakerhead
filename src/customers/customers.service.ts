import { Injectable, Inject } from '@nestjs/common';
import { Customer } from './entities/customer.entity';

@Injectable()
export class CustomerService {
  constructor(
    @Inject('CUSTOMER_REPOSITORY')
    private customersRepository: typeof Customer
  ) { }

  async findAll(): Promise<Customer[]> {
    return this.customersRepository.findAll<Customer>();
  }

  async findOne(id: number): Promise<Customer> {
    return this.customersRepository.findByPk<Customer>(id);
  }

  async create(createCustomerDto): Promise<Customer> {
    const customer = new Customer(createCustomerDto);
    return await customer.save();
  }

  async update(id: number, updateCustomerDto): Promise<[number, Customer[]]> {
    const [affectedCount, affectedRows] = await this.customersRepository.update(updateCustomerDto, {
      where: { id },
      returning: true,
    });
    return [affectedCount, affectedRows as Customer[]];
  }

  async remove(id: number): Promise<number> {
    return this.customersRepository.destroy({ where: { id: id } });
  }
}