import {
  Controller,
  HttpCode,
  HttpStatus,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { BolsaService } from '../services/bolsa.service';
import { Bolsa } from '../entities/bolsa.entity';

@Controller('/bolsa')
export class BolsaController {
  constructor(private readonly bolsaService: BolsaService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Bolsa[]> {
    return this.bolsaService.findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Bolsa> {
    return this.bolsaService.findById(id);
  }

  @Get('/curso/:curso')
  @HttpCode(HttpStatus.OK)
  findByCourse(@Param('curso') curso: string): Promise<Bolsa[]> {
    return this.bolsaService.findByCourse(curso);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() bolsa: Bolsa): Promise<Bolsa> {
    return this.bolsaService.create(bolsa);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() bolsa: Bolsa): Promise<Bolsa> {
    return this.bolsaService.update(bolsa);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.bolsaService.delete(id);
  }

  @Put('/:id/status')
  @HttpCode(HttpStatus.OK)
  updateStatus(
  @Param('id') id: number,
  @Body('ativa') ativa: boolean,
) {
  return this.bolsaService.updateStatus(id, ativa);
}
}
