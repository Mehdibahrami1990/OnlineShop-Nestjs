interface ResizeOptions {
    width?: number;
    height?: number;
}
export declare const saveImage: (file: Express.Multer.File, folder?: string, resizeOptions?: ResizeOptions) => Promise<string>;
export {};
