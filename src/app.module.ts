import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { databaseProviders } from './provider/database.provider';
import { CustomerAddressesModule } from './customer_addresses/customer_addresses.module';

@Module({
  imports: [CustomerAddressesModule],
  controllers: [AppController],
  providers: [AppService, ...databaseProviders],
})
export class AppModule { }
