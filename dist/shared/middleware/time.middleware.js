"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeMiddleware = void 0;
const common_1 = require("@nestjs/common");
const console_1 = require("console");
let TimeMiddleware = class TimeMiddleware {
    use(req, res, next) {
        (0, console_1.time)('Time');
        res.on('finish', () => {
            (0, console_1.timeEnd)('Time');
        });
        next();
    }
};
exports.TimeMiddleware = TimeMiddleware;
exports.TimeMiddleware = TimeMiddleware = __decorate([
    (0, common_1.Injectable)()
], TimeMiddleware);
//# sourceMappingURL=time.middleware.js.map