import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { databaseProviders } from './provider/database.provider';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './configs/constants';
import { AuthGuard } from './auth.guard';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    ...databaseProviders,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})

export class AppModule { }
