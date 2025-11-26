"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobilePipe = void 0;
const common_1 = require("@nestjs/common");
const stringUtiles_1 = require("../utils/stringUtiles");
let MobilePipe = class MobilePipe {
    transform(value) {
        if ('mobile' in value && typeof value.mobile === 'string') {
            const mobileRegex = /^09\d{9}$/;
            const englishMobile = (0, stringUtiles_1.convertNumbers)(value.mobile);
            if (!mobileRegex.test(englishMobile)) {
                throw new common_1.BadRequestException('Please enter the correct mobile number');
            }
            return { ...value, mobile: englishMobile };
        }
        return value;
    }
};
exports.MobilePipe = MobilePipe;
exports.MobilePipe = MobilePipe = __decorate([
    (0, common_1.Injectable)()
], MobilePipe);
//# sourceMappingURL=mobile.pipe.js.map