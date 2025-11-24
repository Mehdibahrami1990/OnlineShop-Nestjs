"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const user_schema_1 = require("../schemas/user.schema");
const mongoose_2 = require("mongoose");
const sort_utils_1 = require("../../shared/utils/sort-utils");
let UserService = class UserService {
    userModel;
    constructor(userModel) {
        this.userModel = userModel;
    }
    async findAll(queryParams, selectObject = { __v: 0 }) {
        const { limit = 55, page = 1, sort, lastName, mobile } = queryParams;
        const query = {};
        if (lastName) {
            query.lastName = { $regex: lastName, $options: 'i' };
        }
        if (mobile) {
            query.mobile = { $regex: mobile, $options: 'i' };
        }
        const sortObject = (0, sort_utils_1.sortFunction)(sort);
        const users = await this.userModel
            .find(query)
            .sort(sortObject)
            .select(selectObject)
            .skip(page - 1)
            .limit(limit)
            .exec();
        const count = await this.userModel.countDocuments(query);
        return { count, users };
    }
    async findOne(id, selectObject = { __v: 0 }) {
        const user = await this.userModel
            .findOne({ __id: id })
            .select(selectObject)
            .exec();
        if (user) {
            return user;
        }
        else {
            throw new common_1.NotFoundException();
        }
    }
    async create(body) {
        const newUser = new this.userModel(body);
        await newUser.save();
        return newUser;
    }
    async update(id, body) {
        return await this.userModel.findByIdAndUpdate(id, body, { new: true });
    }
    async delete(id) {
        const user = await this.findOne(id);
        await user.deleteOne();
        return user;
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UserService);
//# sourceMappingURL=user.service.js.map