// import {
//   BadRequestException,
//   Body,
//   Controller,
//   Delete,
//   Get,
//   Header,
//   HttpCode,
//   HttpStatus,
//   Param,
//   ParseBoolPipe,
//   ParseIntPipe,
//   Post,
//   Query,
//   Redirect,
//   Req,
//   Res,
//   UseFilters,
//   UseGuards,
//   UseInterceptors,
//   UsePipes,
//   ValidationPipe,
// } from '@nestjs/common';
// import { UserDto, userParamsDto } from './dto/user.dto';
// import { User } from './interface/user';
// import { UserService } from './user.service';
// import { Request, Response } from 'express';
// import { HttpExceptionFilter } from './filter';
// import { JoiValidationPipe } from '../core/pipe';
// import { AuthGuard } from './guard';
// import { LoggingInterceptor } from './interceptor';

// @UseInterceptors(LoggingInterceptor)
// @Controller('users')
// @UseGuards(AuthGuard)
// export class UserController {
//   constructor(private readonly userService: UserService) {}

//   @Get()
//   getUsers(
//     @Param('id', ParseIntPipe) id: number,
//     @Query('sort') sort: boolean,
//     @Body() data: UserDto,
//     // @Req() req: Request,
//   ): User[] {
//     return this.userService.getUsers();
//   }
//   // @HttpCode(204)
//   @Get('/:email')
//   @UseInterceptors(new LoggingInterceptor())
//   @UseGuards(new AuthGuard())
//   // @UseFilters(new HttpExceptionFilter())
//   // @Redirect('')
//   // @Header('Cache-control', 'none')
//   async getUser(@Param() params: userParamsDto): Promise<User> {
//     try {
//       return await this.userService.getUser(params.email);
//     } catch (err) {
//       throw new BadRequestException('TEST');
//     }
//   }

//   @Post()
//   @UsePipes(new ValidationPipe())
//   async postUser(@Body() user: UserDto): Promise<User> {
//     console.log(user);
//     return this.userService.addUser(user);
//   }

//   @Delete('/:email')
//   deleteUser(@Param() params: userParamsDto): User[] {
//     return this.userService.deleteUser(params.email);
//   }
// }
