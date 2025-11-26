/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';

@Injectable()
export class PasswordInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((response: unknown) => {
        const newResponse = JSON.parse(JSON.stringify(response));
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        delete newResponse.password;

        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return newResponse;
      }),
    );
  }
}
