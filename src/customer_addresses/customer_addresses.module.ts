import { Module } from '@nestjs/common';
import { CustomerAddressesService } from './customer_addresses.service';
import { CustomerAddressesController } from './customer_addresses.controller';
import { customerAddressProviders } from './provider/customer-addresses.provider';

@Module({
  controllers: [CustomerAddressesController],
  providers: [CustomerAddressesService, ...customerAddressProviders],
})
export class CustomerAddressesModule { }
