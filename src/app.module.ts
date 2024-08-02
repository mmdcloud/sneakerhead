import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { databaseProviders } from './provider/database.provider';
import { storeProviders } from './provider/store.providers';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, ...databaseProviders, ...storeProviders],
})
export class AppModule { }
