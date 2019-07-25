import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT, () =>
    Logger.log(
      `Application has been started on port ${process.env.PORT}`,
      'Bootstrap',
    ),
  );
}
bootstrap();
