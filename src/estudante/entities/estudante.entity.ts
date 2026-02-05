import { IsEmail, IsNotEmpty } from 'class-validator';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Bolsa } from '../../bolsa/entities/bolsa.entity';

@Entity({ name: 'tb_estudantes' })
export class Estudante {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  nome: string;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  @IsEmail()
  email: string;

  @Column({ length: 255, nullable: false })
  endereco: string;

  @IsNotEmpty()
  @Column({ type: 'int', nullable: true })
  idade: number;

  @Column({ length: 255, nullable: false })
  cursoInteresse: string;

  @Column({
  type: 'tinyint',
  width: 1,
  default: 1,
})
  ativo: boolean;

  @ManyToOne(() => Bolsa, (bolsa) => bolsa.estudante)
  bolsa: Bolsa;
}
