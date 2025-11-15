/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsString, IsNotEmpty } from 'class-validator';

export class BlogDto {
  @IsString()
  //   @IsNotEmpty({ message: 'عنوان نباید خالی باشد' })
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  content: string;
  @IsString()
  @IsNotEmpty()
  category: string;
  @IsString()
  @IsNotEmpty()
  image: string;
}
