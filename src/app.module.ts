import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CacheModule } from '@nestjs/cache-manager';
import { RedisOptions } from './configs/app-options.configs';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }),
  CacheModule.registerAsync(RedisOptions),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }