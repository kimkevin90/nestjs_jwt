import {
  Body,
  Controller,
  Delete,
  Get,
  InternalServerErrorException,
  Param,
  ParseBoolPipe,
  Post,
  Query,
  Req,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Response } from 'express';
import { QueryParamDto, TaskDto, TaskParamDto } from './dto/task.dto';
import { Task } from './interface/task';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  async getAlltask(@Res() res: Response) {
    const data = await this.taskService.getAllTask();
    return res.status(200).send(data);
  }

  @Get('/filter/data')
  @UsePipes(new ValidationPipe({ whitelist: false, transform: true }))
  async FilterTaskById(@Query() reqParam: QueryParamDto, @Res() res: Response) {
    console.log(reqParam.filter);
    const data = await this.taskService.filterTask(reqParam.filter);
    return res.status(200).send(data);
  }

  @Get('/:id')
  @UsePipes(new ValidationPipe())
  async getTaskById(@Param() reqParam: TaskParamDto) {
    return await this.taskService.getTask(reqParam.id);
  }

  @Delete(':id')
  @UsePipes(new ValidationPipe())
  async deleteTaskById(@Param() reqParam: TaskParamDto, @Res() res: Response) {
    const data = await this.taskService.deleteTask(reqParam.id);
    return res.status(200).send(data);
  }

  @Post()
  @UsePipes(new ValidationPipe())
  async createTask(@Body() task: TaskDto, @Res() res: Response) {
    const data = await this.taskService.addTask(task);
    return res.status(200).send(data);
  }
}
