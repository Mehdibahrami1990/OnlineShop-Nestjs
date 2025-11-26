import { UserService } from '../services/user.service';
import { UserQueryDto } from '../dtos/user-query.dto';
import { UserDto } from '../dtos/user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findAll(queryParams: UserQueryDto): Promise<{
        count: number;
        users: (import("mongoose").Document<unknown, {}, import("../schemas/user.schema").User, {}, {}> & import("../schemas/user.schema").User & Required<{
            _id: unknown;
        }> & {
            __v: number;
        })[];
    }>;
    create(body: UserDto): Promise<import("mongoose").Document<unknown, {}, import("../schemas/user.schema").User, {}, {}> & import("../schemas/user.schema").User & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, import("../schemas/user.schema").User, {}, {}> & import("../schemas/user.schema").User & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    update(id: string, body: UpdateUserDto): Promise<(import("mongoose").Document<unknown, {}, import("../schemas/user.schema").User, {}, {}> & import("../schemas/user.schema").User & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }) | null>;
    delete(id: string): Promise<import("mongoose").Document<unknown, {}, import("../schemas/user.schema").User, {}, {}> & import("../schemas/user.schema").User & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
}
