import { Injectable, NotFoundException } from '@nestjs/common';
import { BlogDto } from './dtos/blog.dto';
import { InjectModel } from '@nestjs/mongoose';
import { BlogSchema } from './schemas/blog.schema';
import { Model, SortOrder } from 'mongoose';
import { BlogQueryDto } from './dtos/blog-query.dto';
import { sortFunction } from 'src/shared/utils/sort-utils';

@Injectable()
export class BlogService {
  constructor(
    @InjectModel(BlogSchema.name) private readonly blogModel: Model<BlogSchema>,
  ) {}

  async findAll(queryParams: BlogQueryDto) {
    const { page = 1, limit = 5, title, sort } = queryParams;
    const query: any = {};
    if (title) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      query.title = { $regex: title, $options: 'i' };
    }
    const sortObject: Record<string, SortOrder> = sortFunction(sort);
    const blogs = await this.blogModel
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      .find(query)
      .skip(page - 1)
      .sort(sortObject)
      .limit(limit)
      .exec();
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const count = await this.blogModel.countDocuments(query);
    return { count, blogs };
  }
  async findOneBlog(id: string) {
    const blog = await this.blogModel.findOne({ _id: id }).exec();
    if (blog) {
      return blog;
    } else {
      throw new NotFoundException();
    }
  }
  async createCategory(body: BlogDto) {
    const newBlog = new this.blogModel(body);
    await newBlog.save();
    return newBlog;
  }
  async update(id: string, body: BlogDto) {
    const blog = await this.findOneBlog(id);
    blog.title = body.title;
    blog.content = body.content;
    await blog.save();
    return blog;
  }
  async delete(id: string) {
    const blog = await this.findOneBlog(id);
    // const newBlog = this.blogs.filter((item) => item._id !== blog._id);
    // this.blogs = newBlog;
    await blog.deleteOne();
  }
}
