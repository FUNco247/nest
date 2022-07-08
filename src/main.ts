import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  /* useGlobalPipes is middleware in express for validation */
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // if transfered obj have undecorated props? cannot pass to validator
      forbidNonWhitelisted: true, // If set to true, instead of stripping non-whitelisted properties validator will throw an error
      transform: true, // transform types of params with request to what i declare
    }),
  );
  await app.listen(3000);
}
bootstrap();
