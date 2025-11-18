import { ArgumentsHost, ExceptionFilter, HttpException } from '@nestjs/common';
import { AppService } from 'src/app.service';
export declare class LogFilter<T extends HttpException> implements ExceptionFilter {
    private readonly appSevice;
    constructor(appSevice: AppService);
    catch(exception: T, host: ArgumentsHost): Promise<void>;
}
