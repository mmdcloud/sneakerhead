import { Injectable, Inject } from '@nestjs/common';
import { Inventory } from './entity/inventory.entity';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { UpdateInventoryDto } from './dto/update-inventory.dto';

@Injectable()
export class AppService {
  constructor(
    @Inject('INVENTORY_REPOSITORY')
    private inventoryRepository: typeof Inventory
  ) { }

  async findAll(): Promise<Inventory[]> {
    return this.inventoryRepository.findAll<Inventory>();
  }

  async findOne(id: number): Promise<Inventory[]> {
    return this.inventoryRepository.findAll<Inventory>();
  }

  async create(createInventoryDto: CreateInventoryDto): Promise<Inventory[]> {
    return this.inventoryRepository.findAll<Inventory>();
  }

  async update(id: number, updateInventoryDto: UpdateInventoryDto): Promise<Inventory[]> {
    return this.inventoryRepository.findAll<Inventory>();
  }

  async remove(id: number): Promise<Inventory[]> {
    return this.inventoryRepository.findAll<Inventory>();
  }
}