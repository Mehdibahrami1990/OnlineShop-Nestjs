import {
  // ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class EnglishPipe implements PipeTransform {
  transform<T extends Record<string, any>>(value: T): T {
    const items = ['firstName', 'lastName'] as const;
    const errors: string[] = [];
    const english = /^[A-Za-z]{2,}$/;

    for (const key of Object.keys(value)) {
      if (items.includes(key as (typeof items)[number])) {
        const isEnglish = english.test(value[key]);
        if (!isEnglish) {
          errors.push(`please enter ${key} to english alphabet`);
        }
      }
    }

    if (errors.length) {
      throw new BadRequestException(errors);
    }

    return value;
  }
}
