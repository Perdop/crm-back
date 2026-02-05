import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Estudante } from './entities/estudante.entity';
import { EstudanteService } from './services/estudante.services';
import { EstudanteController } from './controllers/estudante.controller';
import { BolsaModule } from '../bolsa/bolsa.module';

@Module({
  imports: [TypeOrmModule.forFeature([Estudante]), BolsaModule],
  providers: [EstudanteService],
  controllers: [EstudanteController],
  exports: [TypeOrmModule],
})
export class EstudanteModule {}
