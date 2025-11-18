import { Document } from 'mongoose';
export declare enum LogType {
    Error = "error"
}
export declare class LogSchema extends Document {
    content: string;
    type: LogType;
}
export declare const logSchema: import("mongoose").Schema<LogSchema, import("mongoose").Model<LogSchema, any, any, any, Document<unknown, any, LogSchema, any, {}> & LogSchema & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, LogSchema, Document<unknown, {}, import("mongoose").FlatRecord<LogSchema>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<LogSchema> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
