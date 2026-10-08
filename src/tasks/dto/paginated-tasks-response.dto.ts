import { ApiProperty } from '@nestjs/swagger';
import { Task } from '../entities/task.entity.js';

export class PaginatedTasksResponseDto {
  @ApiProperty({ type: [Task] })
  data: Task[];

  @ApiProperty({ example: 1 })
  page: number;

  @ApiProperty({ example: 10 })
  limit: number;

  @ApiProperty({ example: 42 })
  total: number;

  @ApiProperty({ example: 5 })
  totalPages: number;
}
