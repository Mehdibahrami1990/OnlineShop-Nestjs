"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordPipe = void 0;
const common_1 = require("@nestjs/common");
let PasswordPipe = class PasswordPipe {
    transform(value) {
        if ('password' in value && typeof value.password === 'string') {
            const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&^_-]{8,}$/;
            const isValidPassword = passwordRegex.test(value?.password);
            if (!isValidPassword) {
                throw new common_1.BadRequestException('The password must be at least 8 characters long and contain both letters and numbers');
            }
            return value;
        }
        return value;
    }
};
exports.PasswordPipe = PasswordPipe;
exports.PasswordPipe = PasswordPipe = __decorate([
    (0, common_1.Injectable)()
], PasswordPipe);
//# sourceMappingURL=password.pipe.js.map