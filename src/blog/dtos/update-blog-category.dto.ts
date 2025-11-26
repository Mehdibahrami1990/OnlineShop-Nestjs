import { PartialType } from '@nestjs/mapped-types';
import { BlogCategoryDto } from './blog-category.dto';

export class UdateBlogCategoryDto extends PartialType(BlogCategoryDto) {}
