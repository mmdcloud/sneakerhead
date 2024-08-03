import { Injectable, Inject } from '@nestjs/common';
import { Store } from './entity/store.entity';
import { Sequelize } from 'sequelize';

@Injectable()
export class AppService {
  constructor(
    @Inject('STORES_REPOSITORY')
    private storesRepository: typeof Store
  ) { }

  async findAll(): Promise<Store[]> {
    return this.storesRepository.findAll<Store>();
  }

  async findOne(id: number): Promise<Store> {
    return this.storesRepository.findByPk<Store>(id);
  }

  async create(createStoreDto): Promise<Store> {
    var store = new Store(createStoreDto);
    return await store.save();
  }

  async update(id: number, updateStoreDto): Promise<[number, Store[]]> {
    const [affectedCount, affectedRows] = await this.storesRepository.update(updateStoreDto, {
      where: { id },
      returning: true,
    });
    return [affectedCount, affectedRows as Store[]];
  }

  async remove(id: number): Promise<number> {
    return this.storesRepository.destroy({ where: { id: id } });
  }

  async getUniqueCountries(): Promise<Store[]> {
    return this.storesRepository.findAll<Store>({
      attributes: [
        [Sequelize.fn('DISTINCT', Sequelize.col('country')), 'country'],
      ]
    });
  }

  async getUniqueStates(country: string): Promise<Store[]> {
    return this.storesRepository.findAll<Store>({
      where: {
        country: country,
      },
      attributes: [
        [Sequelize.fn('DISTINCT', Sequelize.col('state')), 'state'],
      ]
    });
  }

  async getShopsByCountryAndState(country: string, state: string): Promise<Store[]> {
    return this.storesRepository.findAll<Store>({
      where: {
        country: country,
        state: state
      }
    });
  }
}