import { ApiProperty } from '@nestjs/swagger'
import { Task } from 'src/database/entities/task.entity'

export class TasksResponseDto {
  @ApiProperty()
  id: number;
  title: string;
  status: number;
  createdAt: Date;
  updatedAt: Date;
}
