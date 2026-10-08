import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Query } from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiQuery,
} from '@nestjs/swagger';
import { TasksService } from './tasks.service.js';
import { CreateTaskDto } from './dto/create-task.dto.js';
import { UpdateTaskDto } from './dto/update-task.dto.js';
import { PaginationQueryDto } from './dto/pagination-query.dto.js';
import { PaginatedTasksResponseDto } from './dto/paginated-tasks-response.dto.js';
import { Task } from './entities/task.entity.js';

@ApiTags('tasks')
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @ApiOperation({ summary: 'Obtener todas las tareas paginadas' })
  @ApiQuery({ name: 'page', required: false, type: Number, minimum: 1, example: 1 })
  @ApiQuery({ name: 'limit', required: false, type: Number, minimum: 1, maximum: 100, example: 10 })
  @ApiOkResponse({ type: PaginatedTasksResponseDto })
  @Get()
  findAll(@Query() query: PaginationQueryDto) {
    return this.tasksService.findAll(query.page, query.limit);
  }

  @ApiOperation({ summary: 'Buscar tareas por título' })
  @ApiResponse({
    status: 200,
    description: 'Tareas encontradas.',
    type: [Task],
  })
  @Get('search')
  search(@Query('q') q: string) {
    return this.tasksService.search(q);
  }

  @ApiOperation({ summary: 'Obtener tarea por ID' })
  @ApiResponse({
    status: 200,
    description: 'Tarea encontrada.',
    type: Task,
  })
  @ApiNotFoundResponse({ description: 'Tarea no encontrada.' })
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.tasksService.findOne(id);
  }

  @ApiOperation({ summary: 'Crear una nueva tarea' })
  @ApiResponse({
    status: 201,
    description: 'Tarea creada.',
    type: Task,
  })
  @ApiResponse({
    status: 400,
    description: 'Datos inválidos.',
  })
  @Post()
  create(@Body() dto: CreateTaskDto) {
    return this.tasksService.create(dto);
  }

  @ApiOperation({ summary: 'Actualizar tarea por ID' })
  @ApiResponse({
    status: 200,
    description: 'Tarea actualizada correctamente.',
    type: Task,
  })
  @ApiNotFoundResponse({ description: 'Tarea no encontrada.' })
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateTaskDto,
  ) {
    return this.tasksService.update(id, dto);
  }

  @ApiOperation({ summary: 'Eliminar tarea por ID' })
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.tasksService.remove(id);
  }
}