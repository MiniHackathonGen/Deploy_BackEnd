import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('Mini-Hackathon')
  .setDescription('Back-end feito por Sérgio Luiz e Debugado e finalizado por Marcos Morais')
  .setContact('Sérgio Luiz', 'https://www.linkedin.com/in/sergiolneves/', 'sergioluiz852@gmail.com')
  .setVersion('1.0')
  .addBearerAuth()
  .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('/swagger', app, document)
  




  process.env.TZ = '-03:00'
  app.useGlobalPipes(new ValidationPipe())
  app.enableCors()
  await app.listen( process.env.PORT || 4000 );
}

bootstrap();