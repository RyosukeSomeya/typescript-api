import { ApiProperty } from '@nestjs/swagger';
import { Task } from '../../../database/entities/task.entity';

export class TaskResponseDto {
  // Apiのレスポンスとして存在していないといけないデータ
  @ApiProperty()
  task: Task;
}
