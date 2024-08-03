import { Injectable, Inject } from '@nestjs/common';
import { Transaction } from './entities/transaction.entity';

@Injectable()
export class AppService {
  constructor(
    @Inject('TRANSACTIONS_REPOSITORY')
    private transactionsRepository: typeof Transaction
  ) { }

  async findAll(): Promise<Transaction[]> {
    return this.transactionsRepository.findAll<Transaction>();
  }

  async findOne(id: number): Promise<Transaction> {
    return this.transactionsRepository.findByPk<Transaction>(id);
  }

  async create(createTransactionDto): Promise<Transaction> {
    const transaction = new Transaction(createTransactionDto);
    return await transaction.save();
  }

  async update(id: number, updateTransactionDto): Promise<[number, Transaction[]]> {
    const [affectedCount, affectedRows] = await this.transactionsRepository.update(updateTransactionDto, {
      where: { id },
      returning: true,
    });
    return [affectedCount, affectedRows as Transaction[]];
  }

  async remove(id: number): Promise<number> {
    return this.transactionsRepository.destroy({
      where: {
        id
      }
    });
  }
}