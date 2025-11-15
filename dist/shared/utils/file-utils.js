"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveImage = void 0;
const sharp_1 = __importDefault(require("sharp"));
const mkdirp_1 = require("mkdirp");
const path_1 = require("path");
const saveImage = async (file, folder, resizeOptions) => {
    if (!file || !file.buffer) {
        throw new Error('Invalid file or empty buffer');
    }
    const baseDir = 'files/';
    const targetDir = folder ? (0, path_1.join)(baseDir, sanitizeName(folder)) : baseDir;
    (0, mkdirp_1.mkdirpSync)((0, path_1.join)(targetDir, 'main'));
    (0, mkdirp_1.mkdirpSync)((0, path_1.join)(targetDir, 'resized'));
    const safeName = sanitizeName(file.originalname.split('.')[0] + '.webp');
    const timestamp = Date.now();
    const outputName = `${timestamp}-${safeName}`;
    const mainPath = (0, path_1.join)(targetDir, 'main', outputName);
    const resizedPath = (0, path_1.join)(targetDir, 'resized', outputName);
    await (0, sharp_1.default)(file.buffer).webp().toFile(mainPath);
    const { width, height } = resizeOptions || {};
    if (width || height) {
        await (0, sharp_1.default)(file.buffer)
            .webp()
            .resize({
            width: width || 200,
            height: height || 200,
            fit: 'inside',
            withoutEnlargement: true,
        })
            .toFile(resizedPath);
    }
    return mainPath;
};
exports.saveImage = saveImage;
const sanitizeName = (name) => name.replace(/[^a-zA-Z0-9.\-_]/g, '_');
//# sourceMappingURL=file-utils.js.map