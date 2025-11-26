import {
  // ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { convertNumbers } from '../utils/stringUtiles';
@Injectable()
export class MobilePipe implements PipeTransform {
  transform<T extends Record<string, unknown>>(value: T): T {
    if ('mobile' in value && typeof value.mobile === 'string') {
      const mobileRegex = /^09\d{9}$/;
      const englishMobile = convertNumbers(value.mobile);
      if (!mobileRegex.test(englishMobile)) {
        throw new BadRequestException('Please enter the correct mobile number');
      }
      return { ...value, mobile: englishMobile };
    }
    return value;
  }
}
