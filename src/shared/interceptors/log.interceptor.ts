import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Request } from 'express';
import { Observable, tap } from 'rxjs';
import { AppService } from 'src/app.service';
import { LogType } from '../schemas/log.schema';

@Injectable()
export class LogInterceptor implements NestInterceptor {
  constructor(private readonly appService: AppService) {}
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest<Request>();
    type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
    const method = request.method as HttpMethod;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const logType: LogType = LogType[method];
    // console.log(request.method);
    // console.log('Before');

    return next.handle().pipe(
      tap((response) => {
        if (request.method !== 'GET') {
          void this.appService.log({
            content: JSON.stringify(response),
            url: request.url,
            type: logType,
          });
        }
      }),
    );
  }
}
