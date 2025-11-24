import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Request } from 'express';
@Injectable()
export class ApiKeyGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    const apikey = request.headers['apikey'] as string | undefined;

    console.log(process.env.API_KEY);
    console.log(apikey);
    if (apikey === process.env.API_KEY) {
      return true;
    } else {
      return false;
    }
  }
}
