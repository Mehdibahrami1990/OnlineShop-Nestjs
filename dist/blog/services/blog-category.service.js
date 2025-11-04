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
exports.BlogCategoryService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const blog_category_schema_1 = require("../schemas/blog-category.schema");
const mongoose_2 = require("mongoose");
const sort_utils_1 = require("../../shared/utils/sort-utils");
let BlogCategoryService = class BlogCategoryService {
    blogCategoryModel;
    constructor(blogCategoryModel) {
        this.blogCategoryModel = blogCategoryModel;
    }
    async findAll(queryParams, selectObject = { __v: 0 }) {
        const { limit = 5, page = 1, title, sort } = queryParams;
        const query = {};
        if (title) {
            query.title = { $regex: title, $options: 'i' };
        }
        const sortObject = (0, sort_utils_1.sortFunction)(sort);
        const blogCategories = await this.blogCategoryModel
            .find(query)
            .skip(page - 1)
            .sort(sortObject)
            .select(selectObject)
            .limit(limit)
            .exec();
        const count = await this.blogCategoryModel.countDocuments(query);
        return { count, blogCategories };
    }
    async findOne(id, selectObject = { __v: 0 }) {
        const blogCategory = await this.blogCategoryModel
            .findOne({ _id: id })
            .select(selectObject)
            .exec();
        if (blogCategory) {
            return blogCategory;
        }
        else {
            throw new common_1.NotFoundException();
        }
    }
    async create(body) {
        const newBlogCategory = new this.blogCategoryModel(body);
        await newBlogCategory.save();
        return newBlogCategory;
    }
    async update(id, body) {
        return await this.blogCategoryModel.findByIdAndUpdate(id, body, {
            new: true,
        });
    }
    async delete(id) {
        const blogCategory = await this.findOne(id, { _id: 1 });
        await blogCategory.deleteOne();
    }
};
exports.BlogCategoryService = BlogCategoryService;
exports.BlogCategoryService = BlogCategoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(blog_category_schema_1.BlogCategorySchema.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], BlogCategoryService);
//# sourceMappingURL=blog-category.service.js.map