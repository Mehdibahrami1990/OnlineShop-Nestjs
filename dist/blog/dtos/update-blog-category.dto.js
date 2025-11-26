"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UdateBlogCategoryDto = void 0;
const openapi = require("@nestjs/swagger");
const mapped_types_1 = require("@nestjs/mapped-types");
const blog_category_dto_1 = require("./blog-category.dto");
class UdateBlogCategoryDto extends (0, mapped_types_1.PartialType)(blog_category_dto_1.BlogCategoryDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UdateBlogCategoryDto = UdateBlogCategoryDto;
//# sourceMappingURL=update-blog-category.dto.js.map