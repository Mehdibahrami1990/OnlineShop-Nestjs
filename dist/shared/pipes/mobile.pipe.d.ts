import { PipeTransform } from '@nestjs/common';
export declare class MobilePipe implements PipeTransform {
    transform<T extends Record<string, unknown>>(value: T): T;
}
