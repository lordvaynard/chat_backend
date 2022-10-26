import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder() //construção do Swagger
    .setTitle('Chat API')
    .setDescription('Live Code!')
    .setVersion('1.0')
    .build();
    const document = SwaggerModule.createDocument(app, config); //Definições do Swagger
    SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
