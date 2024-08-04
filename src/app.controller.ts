import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';

@Controller("stores")
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post()
  create(@Body() createStoreDto: CreateStoreDto) {
    return this.appService.create(createStoreDto);
  }

  @Get()
  findAll() {
    // return this.appService.getUniqueCountries();
    return this.appService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.appService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStoreDto: UpdateStoreDto) {
    return this.appService.update(+id, updateStoreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.appService.remove(+id);
  }

  @Get('getUniqueCountries')
  getUniqueCountries() {
    return this.appService.getUniqueCountries();
  }

  @Get('getUniqueStates')
  getUniqueStates(@Param('country') country: string) {
    return this.appService.getUniqueStates(country);
  }

  @Get('getShopsByCountryAndState')
  getShopsByCountryAndState(@Param('country') country: string, @Param('state') state: string) {
    return this.appService.getShopsByCountryAndState(country, state);
  }
}
