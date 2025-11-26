import {
  // ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class PasswordPipe implements PipeTransform {
  async transform<T extends Record<string, unknown>>(value: T): Promise<T> {
    if ('password' in value && typeof value.password === 'string') {
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&^_-]{8,}$/;
      const isValidPassword = passwordRegex.test(value?.password);
      if (!isValidPassword) {
        throw new BadRequestException(
          'The password must be at least 8 characters long and contain both letters and numbers',
        );
      } else {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(value.password, salt);
        return { ...value, password: hashedPassword } as T;
      }
    }

    return value;
  }
}
