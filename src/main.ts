import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Valida automaticamente DTOs
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: false, // remove propriedades não declaradas nos DTOs
      forbidNonWhitelisted: false, // lança erro se houver campos extras
      transform: true, // converte tipos automaticamente (ex: string -> number)
    }),
  );

  // Habilita CORS
  app.enableCors();

  const port = process.env.PORT ?? 4000;
  await app.listen(port);
  console.log(`Servidor rodando na porta ${port}`);
}

void bootstrap();
