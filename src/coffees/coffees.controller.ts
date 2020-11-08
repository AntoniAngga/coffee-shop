import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('coffees') /* this is routes and contoller naming */
export class CoffeesController {
  // GET ALL here
  @Get()
  findAll() {
    return 'This Action returns all coffeess';
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
}
