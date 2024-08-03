import { Controller, Get, Post, Delete, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateCartDto } from './dto/create-cart.dto';

@Controller("cart")
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  async getData() {
    try {
      var json = {
        msg: await this.appService.getData()
      };
      return json;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
  @Post()
  async postData(@Body() createCartDto: CreateCartDto) {
    try {
      return await this.appService.postData(createCartDto);
    } catch (error) {
      console.log(error);
      return error;
    }
  }
  @Delete()
  async deleteData() {
    try {
      return await this.appService.deleteData();
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
