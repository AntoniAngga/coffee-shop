import { Controller, Get } from '@nestjs/common';

@Controller('coffee')
export class CoffeeController {
  @Get()
  findAll() {
    return 'This Action returns all coffeess';
  }
}
