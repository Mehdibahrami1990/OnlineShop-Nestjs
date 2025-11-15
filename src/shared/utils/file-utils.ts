import sharp from 'sharp';
import { mkdirpSync } from 'mkdirp';
import { join } from 'path';
interface ResizeOptions {
  width?: number;
  height?: number;
}

export const saveImage = async (
  file: Express.Multer.File,
  folder?: string,
  resizeOptions?: ResizeOptions,
): Promise<string> => {
  if (!file || !file.buffer) {
    throw new Error('Invalid file or empty buffer');
  }

  const baseDir = 'files/';
  const targetDir = folder ? join(baseDir, sanitizeName(folder)) : baseDir;
  mkdirpSync(join(targetDir, 'main'));
  mkdirpSync(join(targetDir, 'resized'));

  const safeName = sanitizeName(file.originalname.split('.')[0] + '.webp');
  const timestamp = Date.now();
  const outputName = `${timestamp}-${safeName}`;
  const mainPath = join(targetDir, 'main', outputName);
  const resizedPath = join(targetDir, 'resized', outputName);

  await sharp(file.buffer).webp().toFile(mainPath);

  const { width, height } = resizeOptions || {};
  if (width || height) {
    await sharp(file.buffer)
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
const sanitizeName = (name: string): string =>
  name.replace(/[^a-zA-Z0-9.\-_]/g, '_');
