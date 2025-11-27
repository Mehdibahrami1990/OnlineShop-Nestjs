import { PipeTransform } from '@nestjs/common';
export declare class PasswordPipe implements PipeTransform {
    private readonly isNew;
    constructor(isNew: boolean);
    transform<T extends Record<string, unknown>>(value: T): Promise<T>;
}
