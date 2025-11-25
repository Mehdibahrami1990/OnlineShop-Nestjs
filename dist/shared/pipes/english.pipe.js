"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnglishPipe = void 0;
const common_1 = require("@nestjs/common");
let EnglishPipe = class EnglishPipe {
    transform(value) {
        const items = ['firstName', 'lastName'];
        const errors = [];
        const english = /^[A-Za-z]{2,}$/;
        for (const key of Object.keys(value)) {
            if (items.includes(key)) {
                const isEnglish = english.test(value[key]);
                if (!isEnglish) {
                    errors.push(`please enter ${key} to english alphabet`);
                }
            }
        }
        if (errors.length) {
            throw new common_1.BadRequestException(errors);
        }
        return value;
    }
};
exports.EnglishPipe = EnglishPipe;
exports.EnglishPipe = EnglishPipe = __decorate([
    (0, common_1.Injectable)()
], EnglishPipe);
//# sourceMappingURL=english.pipe.js.map