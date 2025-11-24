import { Injectable, NestMiddleware } from '@nestjs/common';
import { time, timeEnd } from 'console';
import { Request, Response } from 'express';

@Injectable()
export class TimeMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    // console.log('TimeMiddleware');
    time('Time');
    res.on('finish', () => {
      timeEnd('Time');
    });
    next();
  }
}
