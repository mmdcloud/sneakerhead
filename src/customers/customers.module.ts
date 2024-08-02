import { Module } from '@nestjs/common';
import { CustomerService } from './customers.service';
import { CustomerController } from './customers.controller';
import { customerProviders } from './provider/customer.provider';

@Module({
  controllers: [CustomerController],
  providers: [CustomerService, ...customerProviders],
})
export class CustomersModule { }
