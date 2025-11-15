import {
  Body,
  Controller,
  FileTypeValidator,
  MaxFileSizeValidator,
  ParseFilePipe,
  Post,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes } from '@nestjs/swagger';
import { saveImage } from './shared/utils/file-utils';
import { UploadFilesDto } from './shared/dtos/upload-files.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Post('upload-file')
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('file'))
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },

        folder: {
          type: 'string',
          example: 'test-file',
          description: 'Optional folder name to save the file',
        },
        height: {
          type: 'number',
          example: 600,
          description: 'Optional image height',
        },
        width: {
          type: 'number',
          example: 800,
          description: 'Optional image width',
        },
      },
    },
  })
  async uploadFile(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 20 * 1024 * 1024 }), // 20MB
          new FileTypeValidator({
            fileType: /(image\/jpeg|image\/png|image\/jpg|image\/webp)/,
          }),
        ],
      }),
    )
    file: Express.Multer.File,
    @Body('folder') folder?: string,
    @Body('width') width?: number,
    @Body('height') height?: number,
  ) {
    console.log(file);
    const savedPath = await saveImage(file, folder, {
      width: width ? +width : undefined,
      height: height ? +height : undefined,
    });
    return { message: 'File uploaded successfully', path: savedPath };
  }
  @Post('upload-files')
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FilesInterceptor('files'))
  uploadFiles(
    @UploadedFiles() files: Array<Express.Multer.File>,
    @Body() body: UploadFilesDto,
  ) {
    console.log(files, body);
  }
}
