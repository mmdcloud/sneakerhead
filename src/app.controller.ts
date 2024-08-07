import { Controller, Get, Post, Delete, Body, Request, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateCartDto } from './dto/create-cart.dto';

@Controller("cart")
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  async getData(@Request() req) {
    try {
      var json = {
        key: req.user.id,
        value: JSON.parse(await this.appService.getData(req.user))
      };
      return json;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
  @Post()
  async postData(@Body() createCartDto: CreateCartDto, @Request() req) {
    try {
      return await this.appService.postData(createCartDto, req.user);
    } catch (error) {
      console.log(error);
      return error;
    }
  }
  @Delete()
  async deleteData(@Query() query: { key: string }) {
    try {
      return await this.appService.deleteData(query.key);
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
