import { Test, TestingModule } from '@nestjs/testing';
import { CustomerController } from './customers.controller';
import { CustomerService } from './customers.service';
import { beforeEach, describe, it } from 'node:test';

describe('CustomersController', () => {
  let controller: CustomerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomerController],
      providers: [CustomerService],
    }).compile();

    controller = module.get<CustomerController>(CustomerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
