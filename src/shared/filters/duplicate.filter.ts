/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { MongoError } from 'mongodb';

@Catch(MongoError)
export class DuplicateFilter implements ExceptionFilter {
  catch(exception: MongoError, host: ArgumentsHost) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const response = host.switchToHttp().getResponse();
    if (exception.code === 11000) {
      const duplicateField = exception['keyValue']
        ? // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
          Object.keys(exception['keyValue'])[0]
        : 'unknown';
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      response.status(409).send({
        message: `${duplicateField} Duplicate item`,
        statusCode: 409,
      });
    }
  }
}
