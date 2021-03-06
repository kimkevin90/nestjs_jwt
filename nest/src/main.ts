import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, Logger } from '@nestjs/common';
import { createDocument } from './swagger/swagger';
import { SwaggerModule } from '@nestjs/swagger';
import { LoggingInterceptor } from './core/interceptor';
// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   app.useGlobalPipes(
//     new ValidationPipe({
//       transform: true,
//     }),
//   );
//   // app.setGlobalPrefix('api/v1');
//   // SwaggerModule.setup('api', app, createDocument(app));
//   await app.listen(3000);
// }
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new LoggingInterceptor());
  SwaggerModule.setup('api', app, createDocument(app));
  await app.listen(3000);
}
bootstrap();
