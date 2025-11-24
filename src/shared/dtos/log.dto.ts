import { IsEmpty, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { LogType } from '../schemas/log.schema';

export class LogDto {
  @IsEmpty()
  @IsString()
  content: string;
  @IsEmpty()
  @IsString()
  url: string;
  @IsNotEmpty()
  @IsEnum(LogType)
  type: LogType;
}
