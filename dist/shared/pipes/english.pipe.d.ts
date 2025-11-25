import { PipeTransform } from '@nestjs/common';
export declare class EnglishPipe implements PipeTransform {
    transform<T extends Record<string, any>>(value: T): T;
}
