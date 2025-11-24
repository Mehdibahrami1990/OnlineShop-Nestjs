"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const blog_module_1 = require("./blog/blog.module");
const mongoose_1 = require("@nestjs/mongoose");
const config_1 = require("@nestjs/config");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
const core_1 = require("@nestjs/core");
const log_filter_1 = require("./shared/filters/log.filter");
const log_schema_1 = require("./shared/schemas/log.schema");
const log_interceptor_1 = require("./shared/interceptors/log.interceptor");
const time_middleware_1 = require("./shared/middleware/time.middleware");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(time_middleware_1.TimeMiddleware).forRoutes('*');
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
            }),
            blog_module_1.BlogModule,
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            mongoose_1.MongooseModule.forRoot(process.env.MONGO_URI),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '..', 'files'),
                serveRoot: '/files',
            }),
            mongoose_1.MongooseModule.forFeature([
                {
                    name: log_schema_1.LogSchema.name,
                    schema: log_schema_1.logSchema,
                },
            ]),
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            {
                provide: core_1.APP_FILTER,
                useClass: log_filter_1.LogFilter,
            },
            {
                provide: core_1.APP_INTERCEPTOR,
                useClass: log_interceptor_1.LogInterceptor,
            },
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map