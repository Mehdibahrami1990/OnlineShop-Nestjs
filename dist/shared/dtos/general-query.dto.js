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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneralQueryDto = exports.Sort = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
var Sort;
(function (Sort) {
    Sort["Title"] = "title";
    Sort["CreatedAt"] = "createdAt";
    Sort["UpdatedAt"] = "updatedAt";
})(Sort || (exports.Sort = Sort = {}));
class GeneralQueryDto {
    page;
    limit;
    title;
    sort;
    static _OPENAPI_METADATA_FACTORY() {
        return { page: { required: false, type: () => Number, minimum: 1 }, limit: { required: false, type: () => Number, minimum: 1 }, title: { required: false, type: () => String }, sort: { required: false, enum: require("./general-query.dto").Sort } };
    }
}
exports.GeneralQueryDto = GeneralQueryDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], GeneralQueryDto.prototype, "page", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], GeneralQueryDto.prototype, "limit", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GeneralQueryDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(Sort),
    __metadata("design:type", String)
], GeneralQueryDto.prototype, "sort", void 0);
//# sourceMappingURL=general-query.dto.js.map