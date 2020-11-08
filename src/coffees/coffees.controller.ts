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

@Controller('coffees') /* this is routes and contoller naming */
export class CoffeesController {
  // GET ALL here
  @Get()
  findAll(@Query() paginationParams) {
    const { limit, offset } = paginationParams;
    return `This Action returns all coffeess ${limit} and ${offset}`;
  }

  // GET By id here
  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This Action return params ID ${id}`;
  }

  // POST Here
  @Post()
  create(@Body() body) {
    return body;
  }

  // Patch Update Here
  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `This action updates ${id} with data ${body}`;
  }

  // Delete Here
  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action delete ${id}`;
  }
}
