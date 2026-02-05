import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Bolsa } from '../entities/bolsa.entity';
import { ILike, Repository, DeleteResult } from 'typeorm';
import { Estudante } from '../../estudante/entities/estudante.entity';

@Injectable()
export class BolsaService {
  constructor(
    @InjectRepository(Bolsa)
    private bolsaRepository: Repository<Bolsa>,
    @InjectRepository(Estudante)
    private estudanteRepository: Repository<Estudante>,
  ) { }

  async findAll(): Promise<Bolsa[]> {
    return await this.bolsaRepository.find({
      relations: {
        estudante: true,
      },
    });
  }

  async findById(id: number): Promise<Bolsa> {
    const bolsa = await this.bolsaRepository.findOne({
      where: {
        id,
      },
      relations: {
        estudante: true,
      },
    });

    if (!bolsa) {
      throw new HttpException('Bolsa não encontrada', HttpStatus.NOT_FOUND);
    }
    return bolsa;
  }

  async findByCourse(curso: string): Promise<Bolsa[]> {
    return await this.bolsaRepository.find({
      where: {
        curso: ILike(`%${curso}%`),
      },
      relations: {
        estudante: true,
      },
    });
  }

async updateStatus(
  id: number,
  ativa: boolean,
): Promise<{ bolsa: Bolsa; estudantesAfetados: number }> {

  await this.bolsaRepository.update(id, { ativa });
  const result = await this.estudanteRepository.update(
    { bolsa: { id } },
    { ativo: ativa }
  );

  return {
    bolsa: await this.findById(id),
    estudantesAfetados: result.affected ?? 0,
  };
}


  async create(Bolsa: Bolsa): Promise<Bolsa> {
    return await this.bolsaRepository.save(Bolsa);
  }

  async update(bolsa: Bolsa): Promise<Bolsa> {
    await this.findById(bolsa.id);
    return await this.bolsaRepository.save(bolsa);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findById(id);
    return await this.bolsaRepository.delete(id);
  }
}
