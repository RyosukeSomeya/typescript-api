import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from '@nestjs/common';
import {  ApiExtraModels, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { ApiErrorResponse, ApiSuccessResponse } from 'src/common/decoraters';
import { CommonResponse, CreatedResponse, DeletedResult, NotFoundResponse, OkResponse, UnAuthorizedResponse } from 'src/common/types/response';
import { DeleteResult } from 'typeorm';
import { createTaskRequestDto } from './dto/create-task.request.dto';
import { TaskResponseDto } from './dto/task.response.dto';
import { TasksResponseDto } from './dto/tasks.response.dto';
import { updateTaskRequestDto } from './dto/update-task.request.dto';
import { TaskService } from './task.service';

@ApiTags('tasks')
@Controller('tasks')
@ApiExtraModels(ApiUnauthorizedResponse, NotFoundException)
@ApiErrorResponse(UnAuthorizedResponse)
@ApiErrorResponse(NotFoundResponse)
export class TaskController {
  constructor(private readonly _taskService: TaskService) {}

  @Post()
  @ApiExtraModels(CreatedResponse, TaskResponseDto)
  @ApiSuccessResponse(CreatedResponse, TaskResponseDto)
  async createTask(
    @Body() param: createTaskRequestDto,
  ): Promise<CreatedResponse> {
    let responseData: Promise<TaskResponseDto>;
    responseData = await this._taskService.createTask(param);
    return new CreatedResponse(responseData);
  }

  @Get()
  @ApiExtraModels(OkResponse, TasksResponseDto)
  @ApiSuccessResponse(OkResponse, TasksResponseDto)
  async getTasks(): Promise<TasksResponseDto> {
    let responseData: TaskService;

    responseData = await this._taskService.getTasks();

    return new OkResponse(responseData);
  }

  @Get(':taskId')
  @ApiExtraModels(OkResponse, TaskResponseDto)
  @ApiSuccessResponse(OkResponse, TaskResponseDto)
  async findTask(@Param('taskId') taskId: number): Promise<TaskResponseDto> {
    let responseData: TaskService;
    responseData = await this._taskService.findTask(taskId);
    return new OkResponse(responseData);
  }

  @Put(':taskId')
  @ApiExtraModels(OkResponse, TaskResponseDto)
  @ApiSuccessResponse(OkResponse, TaskResponseDto)
  async updateTask(
    @Param('taskId') taskId: number,
    @Body() param: updateTaskRequestDto,
  ): Promise<TaskResponseDto> {
    let responseData: Promise<TaskResponseDto>;
    responseData = await this._taskService.updateTask(taskId, param);
    return new OkResponse(responseData);
  }

  @Delete(':taskId')
  @ApiExtraModels(OkResponse, DeletedResult)
  @ApiSuccessResponse(OkResponse, DeletedResult)
  async delteTask(@Param('taskId') taskId: number): Promise<DeleteResult> {
    let responseData: Promise<DeleteResult>;
    responseData = await this._taskService.deleteTask(taskId);
    return new OkResponse(responseData);
  }
}
