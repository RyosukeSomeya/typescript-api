import { ApiProperty } from '@nestjs/swagger';

export class TaskResponseDto {
  // Apiのレスポンスとして存在していないといけないデータ
  @ApiProperty()
  id: number;
  title: string;
  status: number;
  createdAt: Date;
  updatedAt: Date;
}
