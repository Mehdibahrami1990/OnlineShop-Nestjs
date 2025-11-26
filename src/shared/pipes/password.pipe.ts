import {
  // ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class PasswordPipe implements PipeTransform {
  transform<T extends Record<string, unknown>>(value: T): T {
    if ('password' in value && typeof value.password === 'string') {
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&^_-]{8,}$/;
      const isValidPassword = passwordRegex.test(value?.password);
      if (!isValidPassword) {
        throw new BadRequestException(
          'The password must be at least 8 characters long and contain both letters and numbers',
        );
      }
      return value;
    }

    return value;
  }
}
