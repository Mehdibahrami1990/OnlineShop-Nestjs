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
exports.BlogService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const blog_schema_1 = require("./schemas/blog.schema");
const mongoose_2 = require("mongoose");
const sort_utils_1 = require("../shared/utils/sort-utils");
let BlogService = class BlogService {
    blogModel;
    constructor(blogModel) {
        this.blogModel = blogModel;
    }
    async findAll(queryParams) {
        const { page = 1, limit = 5, title, sort } = queryParams;
        const query = {};
        if (title) {
            query.title = { $regex: title, $options: 'i' };
        }
        const sortObject = (0, sort_utils_1.sortFunction)(sort);
        const blogs = await this.blogModel
            .find(query)
            .skip(page - 1)
            .sort(sortObject)
            .limit(limit)
            .exec();
        const count = await this.blogModel.countDocuments(query);
        return { count, blogs };
    }
    async findOneBlog(id) {
        const blog = await this.blogModel.findOne({ _id: id }).exec();
        if (blog) {
            return blog;
        }
        else {
            throw new common_1.NotFoundException();
        }
    }
    async createCategory(body) {
        const newBlog = new this.blogModel(body);
        await newBlog.save();
        return newBlog;
    }
    async update(id, body) {
        const blog = await this.findOneBlog(id);
        blog.title = body.title;
        blog.content = body.content;
        await blog.save();
        return blog;
    }
    async delete(id) {
        const blog = await this.findOneBlog(id);
        await blog.deleteOne();
    }
};
exports.BlogService = BlogService;
exports.BlogService = BlogService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(blog_schema_1.BlogSchema.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], BlogService);
//# sourceMappingURL=blog.service.js.map