import { Module } from '@nestjs/common';
import { CustomerService } from './customers.service';
import { CustomerController } from './customers.controller';
import { customerProviders } from './provider/customer.provider';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './configs/constants';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [CustomerController],
  providers: [CustomerService, ...customerProviders],
})
export class CustomersModule { }
