import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';

@Injectable()
export class AppService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) { }

  async getData(user): Promise<string | undefined> {
    const value = await this.cacheManager.get<string>(user.id);
    return value;
  }

  async postData(createCartDto: CreateCartDto, user) {
    const { } = createCartDto;
    await this.cacheManager.set(user.id, createCartDto.value);
  }

  async deleteData() {
    await this.cacheManager.del('key');
  }
}
