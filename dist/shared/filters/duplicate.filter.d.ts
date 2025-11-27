import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { MongoError } from 'mongodb';
export declare class DuplicateFilter implements ExceptionFilter {
    catch(exception: MongoError, host: ArgumentsHost): void;
}
