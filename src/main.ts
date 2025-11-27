import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { DuplicateFilter } from './shared/filters/duplicate.filter';
// import { ApiKeyGuard } from './shared/guards/api-key.guard';
// import { LogFilter } from './shared/filters/log.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      transformOptions: { enableImplicitConversion: true },
    }),
  );
  // app.useGlobalFilters(new LogFilter());
  // app.useGlobalGuards(new ApiKeyGuard());
  app.useGlobalFilters(new DuplicateFilter());
  const config = new DocumentBuilder().setTitle('Nest App').build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/documentation', app, document);
  await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
