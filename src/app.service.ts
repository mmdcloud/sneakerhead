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

  async getUniqueCountries(): Promise<any> {
    var result = await this.storesRepository.findAll({
      attributes: ['country', [Sequelize.fn("COUNT", Sequelize.col("state")), "stateCount"]],
      group: ['country'],
    });
    return result;
  }

  async getUniqueStates(country: string): Promise<any> {
    return this.storesRepository.findAll({
      attributes: ['state', [Sequelize.fn("COUNT", Sequelize.col("city")), "cityCount"]],
      group: ['state'],
      where: {
        country: country,
      },
    });
  }

  async getUniqueCities(country: string, state: string): Promise<Store[]> {
    return this.storesRepository.findAll<Store>({
      where: {
        attributes: ['city', [Sequelize.fn("COUNT", Sequelize.col("id")), "shopCount"]],
        group: ['city'],
        country: country,
        state: state
      }
    });
  }

  async getAggregatedShops(country: string, state: string, city: string): Promise<Store[]> {
    return this.storesRepository.findAll<Store>({
      where: {
        city: city,
        country: country,
        state: state
      }
    });
  }
}