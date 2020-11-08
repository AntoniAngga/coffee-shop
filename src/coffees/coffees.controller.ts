import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';

@Controller('coffees') /* this is routes and contoller naming */
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}
  // GET ALL here
  @Get()
  findAll(@Query() paginationParams) {
    return this.coffeesService.findAll();
  }

  // GET By id here
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coffeesService.findOne(id);
  }

  // POST Here
  @Post()
  create(@Body() body) {
    return this.coffeesService.create(body);
  }

  // Patch Update Here
  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return this.coffeesService.update(id, body);
  }

  // Delete Here
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coffeesService.remove(id);
  }
}
