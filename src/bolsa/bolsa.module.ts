import { Module } from '@nestjs/common';
import { Bolsa } from './entities/bolsa.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BolsaService } from './services/bolsa.service';
import { BolsaController } from './controllers/bolsa.controllers';
import { Estudante } from '../estudante/entities/estudante.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Bolsa, Estudante])],
  providers: [BolsaService],
  controllers: [BolsaController],
  exports: [BolsaService],
})
export class BolsaModule {}
