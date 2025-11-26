import { BlogDto } from '../dtos/blog.dto';
import { BlogService } from '../services/blog.service';
import { BlogQueryDto } from '../dtos/blog-query.dto';
import { UpdateBlogDto } from '../dtos/update-blog.dto';
export declare class BlogController {
    private readonly blogService;
    constructor(blogService: BlogService);
    findAll(queryParams: BlogQueryDto): Promise<{
        count: number;
        blogs: (import("mongoose").Document<unknown, {}, import("../schemas/blog.schema").BlogSchema, {}, {}> & import("../schemas/blog.schema").BlogSchema & Required<{
            _id: unknown;
        }> & {
            __v: number;
        })[];
    }>;
    createCategory(body: BlogDto): Promise<import("mongoose").Document<unknown, {}, import("../schemas/blog.schema").BlogSchema, {}, {}> & import("../schemas/blog.schema").BlogSchema & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    findOneCategory(id: string): Promise<import("mongoose").Document<unknown, {}, import("../schemas/blog.schema").BlogSchema, {}, {}> & import("../schemas/blog.schema").BlogSchema & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    update(id: string, body: UpdateBlogDto): Promise<(import("mongoose").Document<unknown, {}, import("../schemas/blog.schema").BlogSchema, {}, {}> & import("../schemas/blog.schema").BlogSchema & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    delete(id: string): Promise<void>;
}
