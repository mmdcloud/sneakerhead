import { Injectable, Inject } from '@nestjs/common';
import { CustomerAddress } from './entities/customer_address.entity';

@Injectable()
export class CustomerAddressesService {
  constructor(
    @Inject('CUSTOMER_ADDRESS_REPOSITORY')
    private customerAddressesRepository: typeof CustomerAddress
  ) { }

  async findAll(): Promise<CustomerAddress[]> {
    return this.customerAddressesRepository.findAll<CustomerAddress>();
  }

  async findOne(id: number): Promise<CustomerAddress> {
    return this.customerAddressesRepository.findByPk<CustomerAddress>(id);
  }

  async create(createCustomerAddressDto): Promise<CustomerAddress> {
    const customer = new CustomerAddress(createCustomerAddressDto);
    return await customer.save();
  }

  async update(id: number, updateCustomerAddressDto): Promise<[number, CustomerAddress[]]> {
    const [affectedCount, affectedRows] = await this.customerAddressesRepository.update(updateCustomerAddressDto, {
      where: { id },
      returning: true,
    });
    return [affectedCount, affectedRows as CustomerAddress[]];
  }

  async remove(id: number): Promise<number> {
    return this.customerAddressesRepository.destroy({ where: { id: id } });
  }
}