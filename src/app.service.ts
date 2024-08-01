import { Injectable, Inject } from '@nestjs/common';
import { Transaction } from './entity/transaction.entity';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';

@Injectable()
export class AppService {
  constructor(
    @Inject('TRANSACTIONS_REPOSITORY')
    private transactionsRepository: typeof Transaction
  ) { }

  async findAll(): Promise<Transaction[]> {
    return this.transactionsRepository.findAll<Transaction>();
  }

  async findOne(id: number): Promise<Transaction[]> {
    return this.transactionsRepository.findAll<Transaction>();
  }

  async create(createTransactionDto: CreateTransactionDto): Promise<Transaction[]> {
    return this.transactionsRepository.findAll<Transaction>();
  }

  async update(id: number, updateTransactionDto: UpdateTransactionDto): Promise<Transaction[]> {
    return this.transactionsRepository.findAll<Transaction>();
  }

  async remove(id: number): Promise<Transaction[]> {
    return this.transactionsRepository.findAll<Transaction>();
  }
}