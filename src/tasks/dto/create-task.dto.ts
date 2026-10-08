import { IsIn, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  title: string;

  @IsIn(['pending', 'in_progress', 'done'])
  status: string;

  @IsIn(['low', 'medium', 'high'])
  priority: string;
}