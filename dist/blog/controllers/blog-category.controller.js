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
exports.BlogCategoryController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const blog_category_dto_1 = require("../dtos/blog-category.dto");
const blog_category_service_1 = require("../services/blog-category.service");
const blog_category_query_dto_1 = require("../dtos/blog-category-query.dto");
const update_blog_category_dto_1 = require("../dtos/update-blog-category.dto");
let BlogCategoryController = class BlogCategoryController {
    blogCategoryService;
    constructor(blogCategoryService) {
        this.blogCategoryService = blogCategoryService;
    }
    findAll(queryParams) {
        return this.blogCategoryService.findAll(queryParams);
    }
    create(body) {
        return this.blogCategoryService.create(body);
    }
    findOne(id) {
        return this.blogCategoryService.findOne(id);
    }
    update(id, body) {
        return this.blogCategoryService.update(id, body);
    }
    delete(id) {
        return this.blogCategoryService.delete(id);
    }
};
exports.BlogCategoryController = BlogCategoryController;
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [blog_category_query_dto_1.BlogCategoryQueryDto]),
    __metadata("design:returntype", void 0)
], BlogCategoryController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: Object }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [blog_category_dto_1.BlogCategoryDto]),
    __metadata("design:returntype", void 0)
], BlogCategoryController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BlogCategoryController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_blog_category_dto_1.UdateBlogCategoryDto]),
    __metadata("design:returntype", void 0)
], BlogCategoryController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BlogCategoryController.prototype, "delete", null);
exports.BlogCategoryController = BlogCategoryController = __decorate([
    (0, swagger_1.ApiTags)('BlogCategory'),
    (0, common_1.Controller)('blog-category'),
    __metadata("design:paramtypes", [blog_category_service_1.BlogCategoryService])
], BlogCategoryController);
//# sourceMappingURL=blog-category.controller.js.map