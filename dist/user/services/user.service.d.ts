import { User } from '../schemas/user.schema';
import { Model } from 'mongoose';
import { UserQueryDto } from '../dtos/user-query.dto';
import { UserDto } from '../dtos/user.dto';
export declare class UserService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    findAll(queryParams: UserQueryDto, selectObject?: any): Promise<{
        count: number;
        users: (import("mongoose").Document<unknown, {}, User, {}, {}> & User & Required<{
            _id: unknown;
        }> & {
            __v: number;
        })[];
    }>;
    findOne(id: string, selectObject?: any): Promise<import("mongoose").Document<unknown, {}, User, {}, {}> & User & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    create(body: UserDto): Promise<import("mongoose").Document<unknown, {}, User, {}, {}> & User & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    update(id: string, body: UserDto): Promise<(import("mongoose").Document<unknown, {}, User, {}, {}> & User & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    delete(id: string): Promise<import("mongoose").Document<unknown, {}, User, {}, {}> & User & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
}
