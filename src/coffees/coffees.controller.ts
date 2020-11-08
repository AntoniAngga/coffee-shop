import { Controller, Get } from '@nestjs/common';

@Controller('coffees') /* this is routes and contoller naming */
export class CoffeesController {
  @Get()
  findAll() {
    return 'This Action returns all coffeess';
  }
}
