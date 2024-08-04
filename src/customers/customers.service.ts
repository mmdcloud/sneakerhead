import { Injectable, Inject } from '@nestjs/common';
import { Customer } from './entities/customer.entity';
import * as bcrypt from 'bcrypt';
import { LoginRequestDto } from './dto/login-request.dto';
import { LoginResponse } from './dto/login-response.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class CustomerService {
  constructor(
    @Inject('CUSTOMER_REPOSITORY')
    private customersRepository: typeof Customer,
    private jwtService: JwtService
  ) { }

  async findAll(): Promise<Customer[]> {
    return this.customersRepository.findAll<Customer>();
  }

  async findOne(id: number): Promise<Customer> {
    return this.customersRepository.findByPk<Customer>(id);
  }

  async create(createCustomerDto): Promise<Customer> {
    const password = createCustomerDto.password;
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(password, salt);
    const customer = new Customer(createCustomerDto);
    customer.password = hash;
    return await customer.save();
  }

  async update(id: number, updateCustomerDto): Promise<[number, Customer[]]> {
    const [affectedCount, affectedRows] = await this.customersRepository.update(updateCustomerDto, {
      where: { id },
      returning: true,
    });
    return [affectedCount, affectedRows as Customer[]];
  }

  async remove(id: number): Promise<number> {
    return this.customersRepository.destroy({ where: { id: id } });
  }

  async login(loginRequest: LoginRequestDto): Promise<LoginResponse> {
    var response = new LoginResponse();
    var record = await this.customersRepository.findAll<Customer>({
      where: {
        contact: loginRequest.contact
      }
    });
    if (record.length == 0) {
      response.msg = "User not found !";
      response.state = "fail";
      return response;
    }
    const isMatch = await bcrypt.compare(loginRequest.password, record[0].password);
    if (!isMatch) {
      response.msg = "Invalid password !";
      response.state = "fail";
      return response;
    }
    response.msg = "Login successful !";
    response.state = "success";
    response.access_token = await this.jwtService.signAsync({
      sub: record[0].id, contact: record[0].contact
    });
    return response;
  }
}