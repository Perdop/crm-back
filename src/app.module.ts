/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstudanteModule } from './estudante/estudante.module';
import { BolsaModule } from './bolsa/bolsa.module';
import { Estudante } from './estudante/entities/estudante.entity';
import { Bolsa } from './bolsa/entities/bolsa.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE as 'postgres', // ✅ PostgreSQL
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [Estudante, Bolsa],
      synchronize: process.env.DB_SYNCHRONIZE === 'development',
      ssl:
        process.env.NODE_ENV === 'production'
          ? { rejectUnauthorized: false }
          : false, // Render requer SSL
    }),
    EstudanteModule,
    BolsaModule,
  ],
})
export class AppModule {}
