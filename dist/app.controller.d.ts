import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    uploadFile(file: Express.Multer.File, folder?: string, width?: number, height?: number): Promise<{
        message: string;
        path: string;
    }>;
    uploadFiles(files: Array<Express.Multer.File>): void;
}
