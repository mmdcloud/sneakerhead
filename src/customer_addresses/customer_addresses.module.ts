import { Module } from '@nestjs/common';
import { CustomerAddressesService } from './customer_addresses.service';
import { CustomerAddressesController } from './customer_addresses.controller';
import { customerAddressProviders } from './provider/customer-addresses.provider';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './configs/constants';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth.guard';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [CustomerAddressesController],
  providers: [
    CustomerAddressesService,
    ...customerAddressProviders,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class CustomerAddressesModule { }
