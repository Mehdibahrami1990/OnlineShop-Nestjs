import { Injectable, NotFoundException } from '@nestjs/common';
import { BlogDto } from './dtos/blog.dto';
import { InjectModel } from '@nestjs/mongoose';
import { BlogSchema } from './schemas/blog.schema';
import { Model } from 'mongoose';
import { BlogQueryDto } from './dtos/blog-query.dto';

@Injectable()
export class BlogService {
  constructor(
    @InjectModel(BlogSchema.name) private readonly blogModel: Model<BlogSchema>,
  ) {}

  async findAll(queryParams: BlogQueryDto) {
    const { page = 1, limit = 5, title } = queryParams;
    console.log(title);
    const blogs = await this.blogModel
      .find()
      .skip(page - 1)
      .limit(limit)
      .exec();
    const count = await this.blogModel.countDocuments();
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
