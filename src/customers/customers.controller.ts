import { Body, Controller, Delete, Get, Param, Patch, Post, Request, UseGuards } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { CustomerService } from './customers.service';
import { LoginRequestDto } from './dto/login-request.dto';
import { AuthGuard } from './auth.guard';
import { UpdateFcmTokenRequestDto } from './dto/update-fcm-token-request.dto';

@Controller("customers")
export class CustomerController {
  constructor(private readonly appService: CustomerService) { }

  @Post("auth/login")
  login(@Body() loginRequestDto: LoginRequestDto) {
    return this.appService.login(loginRequestDto);
  }
  @UseGuards(AuthGuard)
  @Post("updateFcmToken")
  updateFcmToken(@Request() req: any, @Body() updateFcmTokenDto: UpdateFcmTokenRequestDto) {
    return this.appService.updateFcmToken(req.user, updateFcmTokenDto);
  }

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
