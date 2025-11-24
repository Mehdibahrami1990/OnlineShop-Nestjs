import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { BlogDto } from '../dtos/blog.dto';
import { BlogService } from '../services/blog.service';
import { BlogQueryDto } from '../dtos/blog-query.dto';
// import { ApiHeader } from '@nestjs/swagger';

// @ApiTags('Blog')
// @ApiHeader({
//   name: 'apikey',
//   description: 'API KEY',
// })
@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Get()
  findAll(@Query() queryParams: BlogQueryDto) {
    // console.log('Contriller');
    return this.blogService.findAll(queryParams);
  }
  @Post()
  createCategory(@Body() body: BlogDto) {
    return this.blogService.createCategory(body);
  }

  @Get('/:id')
  findOneCategory(@Param('id') id: string) {
    return this.blogService.findOneBlog(id);
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() body: BlogDto) {
    return this.blogService.update(id, body);
  }
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.blogService.delete(id);
  }
}
