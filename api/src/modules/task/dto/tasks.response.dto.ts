import { ApiProperty } from '@nestjs/swagger';
import { Task } from '../../../database/entities/task.entity';

export class TasksResponseDto {
  @ApiProperty()
  tasks: Task[];
}
