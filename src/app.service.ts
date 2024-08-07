import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';

@Injectable()
export class AppService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) { }

  async getData(user): Promise<string | undefined> {
    const value = await this.cacheManager.get<string>(user.id.toString());
    return value;
  }

  async postData(createCartDto: CreateCartDto, user) {
    var stringifiedJson = JSON.stringify({
      "productId": createCartDto.productId,
      "productName": createCartDto.productName
    });
    await this.cacheManager.set(user.id.toString(), stringifiedJson);
  }

  async deleteData(key: string) {
    await this.cacheManager.del(key);
  }
}
