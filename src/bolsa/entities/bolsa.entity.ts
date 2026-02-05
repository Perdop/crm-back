import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Estudante } from '../../estudante/entities/estudante.entity';

@Entity({ name: 'tb_bolsas' })
export class Bolsa {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column('decimal', { precision: 5, scale: 2 })
  porcentagem: number;

  @Column()
  instituicao: string;

  @Column({ nullable: true })
  curso: string;

  @Column({ type: 'date' })
  validade: Date;

  @Column({
  type: 'tinyint',
  width: 1,
  default: 1,
})
  ativa: boolean; // Se a bolsa está ativa

  // RELACIONAMENTO
  @OneToMany(() => Estudante, (estudante) => estudante.bolsa, {
    onDelete: 'SET NULL',
    nullable: true,
  })
  estudante: Estudante[];
}
