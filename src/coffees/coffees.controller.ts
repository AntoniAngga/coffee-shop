import { Controller, Get } from '@nestjs/common';

@Controller('coffees') /* this is routes and contoller naming */
export class CoffeeController {
  @Get()
  findAll() {
    return 'This Action returns all coffeess';
  }
}
