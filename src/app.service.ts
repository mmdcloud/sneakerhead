import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';

@Injectable()
export class AppService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) { }

  async getData(): Promise<string | undefined> {
    const value = await this.cacheManager.get<string>('key');
    return value;
  }

  async postData(createCartDto: CreateCartDto) {
    const { } = createCartDto;
    await this.cacheManager.set('key', "value");
  }

  async deleteData() {
    await this.cacheManager.del('key');
  }
}
