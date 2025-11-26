import { PipeTransform } from '@nestjs/common';
export declare class PasswordPipe implements PipeTransform {
    transform<T extends Record<string, unknown>>(value: T): T;
}
