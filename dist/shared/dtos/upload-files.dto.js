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
exports.UploadFilesDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class UploadFilesDto {
    files;
    folder;
    height;
    width;
    static _OPENAPI_METADATA_FACTORY() {
        return { files: { required: true, type: () => [Object] }, folder: { required: false, type: () => String }, height: { required: false, type: () => Number }, width: { required: false, type: () => Number } };
    }
}
exports.UploadFilesDto = UploadFilesDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'array',
        required: true,
        items: {
            type: 'string',
            format: 'binary',
        },
    }),
    __metadata("design:type", Array)
], UploadFilesDto.prototype, "files", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UploadFilesDto.prototype, "folder", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UploadFilesDto.prototype, "height", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UploadFilesDto.prototype, "width", void 0);
//# sourceMappingURL=upload-files.dto.js.map