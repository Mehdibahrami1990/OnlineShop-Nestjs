import { BlogCategoryDto } from '../dtos/blog-category.dto';
import { BlogCategoryService } from '../services/blog-category.service';
import { BlogCategoryQueryDto } from '../dtos/blog-category-query.dto';
import { UdateBlogCategoryDto } from '../dtos/update-blog-category.dto';
export declare class BlogCategoryController {
    private readonly blogCategoryService;
    constructor(blogCategoryService: BlogCategoryService);
    findAll(queryParams: BlogCategoryQueryDto): Promise<{
        count: number;
        blogCategories: (import("mongoose").Document<unknown, {}, import("../schemas/blog-category.schema").BlogCategorySchema, {}, {}> & import("../schemas/blog-category.schema").BlogCategorySchema & Required<{
            _id: unknown;
        }> & {
            __v: number;
        })[];
    }>;
    create(body: BlogCategoryDto): Promise<import("mongoose").Document<unknown, {}, import("../schemas/blog-category.schema").BlogCategorySchema, {}, {}> & import("../schemas/blog-category.schema").BlogCategorySchema & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, import("../schemas/blog-category.schema").BlogCategorySchema, {}, {}> & import("../schemas/blog-category.schema").BlogCategorySchema & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    update(id: string, body: UdateBlogCategoryDto): Promise<(import("mongoose").Document<unknown, {}, import("../schemas/blog-category.schema").BlogCategorySchema, {}, {}> & import("../schemas/blog-category.schema").BlogCategorySchema & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    delete(id: string): Promise<void>;
}
