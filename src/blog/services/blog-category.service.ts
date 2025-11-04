import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { BlogCategorySchema } from '../schemas/blog-category.schema';
import { Model } from 'mongoose';
import { BlogCategoryDto } from '../dtos/blog-category.dto';
import { BlogCategoryQueryDto } from '../dtos/blog-category-query.dto';
import { sortFunction } from 'src/shared/utils/sort-utils';

@Injectable()
export class BlogCategoryService {
  constructor(
    @InjectModel(BlogCategorySchema.name)
    private readonly blogCategoryModel: Model<BlogCategorySchema>,
  ) {}

  async findAll(
    queryParams: BlogCategoryQueryDto,
    selectObject: any = { __v: 0 },
  ) {
    const { limit = 5, page = 1, title, sort } = queryParams;

    const query: any = {};

    if (title) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      query.title = { $regex: title, $options: 'i' };
    }

    const sortObject = sortFunction(sort);

    const blogCategories = await this.blogCategoryModel
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      .find(query)
      .skip(page - 1)
      .sort(sortObject)
      .select(selectObject)
      .limit(limit)
      .exec();

    const count = await this.blogCategoryModel.countDocuments(query);

    return { count, blogCategories };
  }

  async findOne(id: string, selectObject: any = { __v: 0 }) {
    const blogCategory = await this.blogCategoryModel
      .findOne({ _id: id })
      .select(selectObject)
      .exec();
    if (blogCategory) {
      return blogCategory;
    } else {
      throw new NotFoundException();
    }
  }

  async create(body: BlogCategoryDto) {
    const newBlogCategory = new this.blogCategoryModel(body);
    await newBlogCategory.save();
    return newBlogCategory;
  }

  async update(id: string, body: BlogCategoryDto) {
    return await this.blogCategoryModel.findByIdAndUpdate(id, body, {
      new: true,
    });
    //const blogCategory = await this.findOne(id, { title: 1, content: 1 });
    // blogCategory.title = body.title;
    // blogCategory.content = body.content;
    // await blogCategory.save();
    // return blogCategory;
  }

  async delete(id: string) {
    const blogCategory = await this.findOne(id, { _id: 1 });
    await blogCategory.deleteOne();
  }
}
