// import { Controller, Get } from '@nestjs/common';
// import { AppService } from './app.service';

// @Controller()
// export class AppController {
//   constructor(private readonly appService: AppService) {}

//   @Get()
//   getHello(): string {
//     return this.appService.getHello();
//   }
// }

import {
  Controller,
  Get,
  UseFilters,
  UseGuards,
  Body,
  Post,
} from '@nestjs/common';
import { AppService } from './app.service';

import { ApiProperty } from '@nestjs/swagger';

import { HttpExceptionFilter } from './core/filter';
@Controller()
@UseFilters(new HttpExceptionFilter())
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  // @Post()
  // postHello(@Body() data: mainDto): string {
  //   return this.appService.getHello();
  // }
}
