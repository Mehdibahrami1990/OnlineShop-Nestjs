import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class UploadFileDto {
  @ApiProperty({
    type: 'string',
    format: 'binary',
    required: true,
  })
  file: any;

  @ApiPropertyOptional({
    description: 'Optional height of the image',
    type: Number,
  })
  @IsOptional()
  height?: number;

  @ApiPropertyOptional({
    description: 'Optional width of the image',
    type: Number,
  })
  @IsOptional()
  width?: number;
}
