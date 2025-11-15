import { Document } from 'mongoose';
export declare class BlogCategorySchema extends Document {
    title: string;
    content: string;
    image: string;
}
export declare const blogCategorySchema: import("mongoose").Schema<BlogCategorySchema, import("mongoose").Model<BlogCategorySchema, any, any, any, Document<unknown, any, BlogCategorySchema, any, {}> & BlogCategorySchema & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, BlogCategorySchema, Document<unknown, {}, import("mongoose").FlatRecord<BlogCategorySchema>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<BlogCategorySchema> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
