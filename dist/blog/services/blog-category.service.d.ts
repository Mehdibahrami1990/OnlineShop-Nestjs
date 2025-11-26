import { BlogCategorySchema } from '../schemas/blog-category.schema';
import { Model } from 'mongoose';
import { BlogCategoryDto } from '../dtos/blog-category.dto';
import { BlogCategoryQueryDto } from '../dtos/blog-category-query.dto';
import { UdateBlogCategoryDto } from '../dtos/update-blog-category.dto';
export declare class BlogCategoryService {
    private readonly blogCategoryModel;
    constructor(blogCategoryModel: Model<BlogCategorySchema>);
    findAll(queryParams: BlogCategoryQueryDto, selectObject?: any): Promise<{
        count: number;
        blogCategories: (import("mongoose").Document<unknown, {}, BlogCategorySchema, {}, {}> & BlogCategorySchema & Required<{
            _id: unknown;
        }> & {
            __v: number;
        })[];
    }>;
    findOne(id: string, selectObject?: any): Promise<import("mongoose").Document<unknown, {}, BlogCategorySchema, {}, {}> & BlogCategorySchema & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    create(body: BlogCategoryDto): Promise<import("mongoose").Document<unknown, {}, BlogCategorySchema, {}, {}> & BlogCategorySchema & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    update(id: string, body: UdateBlogCategoryDto): Promise<(import("mongoose").Document<unknown, {}, BlogCategorySchema, {}, {}> & BlogCategorySchema & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    delete(id: string): Promise<void>;
}
