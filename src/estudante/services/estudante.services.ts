import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Estudante } from '../entities/estudante.entity';
import { ILike, Repository, DeleteResult } from 'typeorm';
import { BolsaService } from '../../bolsa/services/bolsa.service';

@Injectable()
export class EstudanteService {
  constructor(
    @InjectRepository(Estudante)
    private estudanteRepository: Repository<Estudante>,
    private readonly bolsaService: BolsaService,
  ) {}

  async findAll(): Promise<Estudante[]> {
    return await this.estudanteRepository.find({
      relations: {
        bolsa: true,
      },
    });
  }

  async findById(id: number): Promise<Estudante> {
    const estudante = await this.estudanteRepository.findOne({
      where: {
        id,
      },
      relations: {
        bolsa: true,
      },
    });

    if (!estudante)
      throw new HttpException(
        'Estudante não encontrado!',
        HttpStatus.NOT_FOUND,
      );
    return estudante;
  }

  async findByName(nome: string): Promise<Estudante[]> {
    return await this.estudanteRepository.find({
      where: {
        nome: ILike(`%${nome}%`),
      },
      relations: {
        bolsa: true,
      },
    });
  }

  async updateStatus(id: number, ativo: boolean): Promise<Estudante> {
    const estudante = await this.findById(id);
    estudante.ativo = ativo;
    return await this.estudanteRepository.save(estudante);
  }

  async create(estudante: Estudante): Promise<Estudante> {
    await this.bolsaService.findById(estudante.bolsa.id);
    
    return await this.estudanteRepository.save(estudante);
  }

  async update(estudante: Estudante): Promise<Estudante> {

    await this.findById(estudante.id);

    await this.bolsaService.findById(estudante.bolsa.id);

    return await this.estudanteRepository.save(estudante);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findById(id);

    return await this.estudanteRepository.delete(id);
  }
}
