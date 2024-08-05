import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';

@Controller("stores")
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('getUniqueCountries')
  getUniqueCountries() {
    return this.appService.getUniqueCountries();
  }

  @Get('getUniqueStates')
  getUniqueStates(@Query() query: { country: string }) {
    return this.appService.getUniqueStates(query.country);
  }

  @Get('getUniqueCities')
  getUniqueCities(@Query() query: { country: string, state: string }) {
    return this.appService.getUniqueCities(query.country, query.state);
  }

  @Get('getAggregatedShops')
  getAggregatedShops(@Query() query: { country: string, state: string, city: string }) {
    return this.appService.getAggregatedShops(query.country, query.state, query.city);
  }

  @Post()
  create(@Body() createStoreDto: CreateStoreDto) {
    return this.appService.create(createStoreDto);
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
  update(@Param('id') id: string, @Body() updateStoreDto: UpdateStoreDto) {
    return this.appService.update(+id, updateStoreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.appService.remove(+id);
  }
}
