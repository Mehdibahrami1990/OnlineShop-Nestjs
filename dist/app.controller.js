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
exports.AppController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const file_utils_1 = require("./shared/utils/file-utils");
let AppController = class AppController {
    appService;
    constructor(appService) {
        this.appService = appService;
    }
    async uploadFile(file, folder, width, height) {
        console.log(file);
        const savedPath = await (0, file_utils_1.saveImage)(file, folder, {
            width: width ? +width : undefined,
            height: height ? +height : undefined,
        });
        return { message: 'File uploaded successfully', path: savedPath };
    }
    uploadFiles(files) {
        console.log(files);
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Post)('upload-file'),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                file: {
                    type: 'string',
                    format: 'binary',
                },
                folder: {
                    type: 'string',
                    example: 'test-file',
                    description: 'Optional folder name to save the file',
                },
                height: {
                    type: 'number',
                    example: 600,
                    description: 'Optional image height',
                },
                width: {
                    type: 'number',
                    example: 800,
                    description: 'Optional image width',
                },
            },
        },
    }),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.UploadedFile)(new common_1.ParseFilePipe({
        validators: [
            new common_1.MaxFileSizeValidator({ maxSize: 20 * 1024 * 1024 }),
            new common_1.FileTypeValidator({
                fileType: /(image\/jpeg|image\/png|image\/jpg|image\/webp)/,
            }),
        ],
    }))),
    __param(1, (0, common_1.Body)('folder')),
    __param(2, (0, common_1.Body)('width')),
    __param(3, (0, common_1.Body)('height')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Number, Number]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "uploadFile", null);
__decorate([
    (0, common_1.Post)('upload-files'),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('files')),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "uploadFiles", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
//# sourceMappingURL=app.controller.js.map