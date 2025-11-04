import { BlogDto } from './dtos/blog.dto';
import { BlogSchema } from './schemas/blog.schema';
import { Model } from 'mongoose';
import { BlogQueryDto } from './dtos/blog-query.dto';
export declare class BlogService {
    private readonly blogModel;
    constructor(blogModel: Model<BlogSchema>);
    findAll(queryParams: BlogQueryDto): Promise<{
        count: number;
        blogs: (import("mongoose").Document<unknown, {}, BlogSchema, {}, {}> & BlogSchema & Required<{
            _id: unknown;
        }> & {
            __v: number;
        })[];
    }>;
    findOneBlog(id: string): Promise<import("mongoose").Document<unknown, {}, BlogSchema, {}, {}> & BlogSchema & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    createCategory(body: BlogDto): Promise<import("mongoose").Document<unknown, {}, BlogSchema, {}, {}> & BlogSchema & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    update(id: string, body: BlogDto): Promise<import("mongoose").Document<unknown, {}, BlogSchema, {}, {}> & BlogSchema & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    delete(id: string): Promise<void>;
}
