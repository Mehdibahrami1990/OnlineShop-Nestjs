"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogQueryDto = void 0;
const openapi = require("@nestjs/swagger");
const general_query_dto_1 = require("../../shared/dtos/general-query.dto");
class BlogQueryDto extends general_query_dto_1.GeneralQueryDto {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.BlogQueryDto = BlogQueryDto;
//# sourceMappingURL=blog-query.dto.js.map