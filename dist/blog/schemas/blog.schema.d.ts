import { Document } from 'mongoose';
export declare class BlogSchema extends Document {
    title: string;
    content: string;
}
export declare const blogSchema: import("mongoose").Schema<BlogSchema, import("mongoose").Model<BlogSchema, any, any, any, Document<unknown, any, BlogSchema, any, {}> & BlogSchema & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, BlogSchema, Document<unknown, {}, import("mongoose").FlatRecord<BlogSchema>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<BlogSchema> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
