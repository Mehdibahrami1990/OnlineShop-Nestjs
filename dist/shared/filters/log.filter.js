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
exports.LogFilter = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("../../app.service");
const log_schema_1 = require("../schemas/log.schema");
let LogFilter = class LogFilter {
    appSevice;
    constructor(appSevice) {
        this.appSevice = appSevice;
    }
    async catch(exception, host) {
        const response = host.switchToHttp().getResponse();
        const status = exception.getStatus();
        if (status == 404) {
            response.status(404).send({
                statusCode: status,
                message: 'Not Found',
            });
        }
        else {
            response.send(exception.getResponse());
        }
        await this.appSevice.log({
            type: log_schema_1.LogType.Error,
            content: JSON.stringify(exception.getResponse()),
        });
    }
};
exports.LogFilter = LogFilter;
exports.LogFilter = LogFilter = __decorate([
    (0, common_1.Catch)(common_1.HttpException),
    __metadata("design:paramtypes", [app_service_1.AppService])
], LogFilter);
//# sourceMappingURL=log.filter.js.map