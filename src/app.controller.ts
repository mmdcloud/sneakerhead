import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Controller("/")
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post()
  create(@Body() createCustomerDto: CreateCustomerDto) {
    return this.appService.create(createCustomerDto);
  }

  @Get()
  findAll() {
    return this.appService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.appService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateCustomerDto) {
    return this.appService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.appService.remove(+id);
  }
}
