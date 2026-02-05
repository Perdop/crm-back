import {
  Controller,
  Get,
  HttpStatus,
  HttpCode,
  ParseIntPipe,
  Param,
  Put,
  Body,
  Post,
  Delete,
} from '@nestjs/common';
import { EstudanteService } from '../services/estudante.services';
import { Estudante } from '../entities/estudante.entity';

@Controller('/estudante')
export class EstudanteController {
  constructor(private readonly estudanteService: EstudanteService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Estudante[]> {
    return this.estudanteService.findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Estudante> {
    return this.estudanteService.findById(id);
  }

  @Get('/nome/:nome')
  @HttpCode(HttpStatus.OK)
  findByName(@Param('nome') nome: string): Promise<Estudante[]> {
    return this.estudanteService.findByName(nome);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() estudante: Estudante): Promise<Estudante> {
    return this.estudanteService.create(estudante);
  }
  @Put('/status/:id')
  @HttpCode(HttpStatus.OK)
  updateStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body('ativo') ativo: boolean,
  ): Promise<Estudante> {
    return this.estudanteService.updateStatus(id, ativo);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() estudante: Estudante): Promise<Estudante> {
    return this.estudanteService.update(estudante);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.estudanteService.delete(id);
  }
}
