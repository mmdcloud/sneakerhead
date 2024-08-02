import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager'; // ! Don't forget this import
import { Inject, Injectable } from '@nestjs/common';
import { CreateDataDto } from './dto/create-data.dto';

@Injectable()
export class AppService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) { }

  async getData(): Promise<string | undefined> {
    const value = await this.cacheManager.get<string>('key');
    return value;
  }

  async postData(createDataDto: CreateDataDto) {
    // const { value } = createDataDto;
    await this.cacheManager.set('key', createDataDto);
  }

  async deleteData() {
    await this.cacheManager.del('key');
  }
}
