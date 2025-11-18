import { LogSchema } from './shared/schemas/log.schema';
import { Model } from 'mongoose';
import { LogDto } from './shared/dtos/log.dto';
export declare class AppService {
    private logModel;
    constructor(logModel: Model<LogSchema>);
    log(body: LogDto): Promise<import("mongoose").Document<unknown, {}, LogSchema, {}, {}> & LogSchema & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
}
