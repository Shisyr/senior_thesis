import { NestFactory } from '@nestjs/core';
import { AuthModule } from './modules/authModule';

async function bootstrap() {
  const app = await NestFactory.create(AuthModule);
  app.setGlobalPrefix('api/v1');
  await app.listen(1998);
}
bootstrap();
