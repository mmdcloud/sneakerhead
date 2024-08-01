import { Injectable, Inject } from '@nestjs/common';
import { Store } from './entity/store.entity';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';

@Injectable()
export class AppService {
  constructor(
    @Inject('STORES_REPOSITORY')
    private storesRepository: typeof Store
  ) { }

  async findAll(): Promise<Store[]> {
    return this.storesRepository.findAll<Store>();
  }

  async findOne(id: number): Promise<Store[]> {
    return this.storesRepository.findAll<Store>();
  }

  async create(createStoreDto: CreateStoreDto): Promise<Store[]> {
    return this.storesRepository.findAll<Store>();
  }

  async update(id: number, updateStoreDto: UpdateStoreDto): Promise<Store[]> {
    return this.storesRepository.findAll<Store>();
  }

  async remove(id: number): Promise<Store[]> {
    return this.storesRepository.findAll<Store>();
  }
}