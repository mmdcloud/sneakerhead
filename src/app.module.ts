import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { databaseProviders } from './provider/database.provider';
import { CustomersModule } from './customers/customers.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [CustomersModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, ...databaseProviders],
})
export class AppModule { }
