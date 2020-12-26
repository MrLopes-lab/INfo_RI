import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import Operator from './Operator';

@Entity('registries')
export default class Registry {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  registration_number: string;

  @Column()
  operator_id: number;

  @OneToOne(() => Operator)
  @JoinColumn({ name: 'operator_id' })
  include: Operator;

  @Column()
  created_at: string;

  @Column('boolean', {default: false})
  checked: boolean;
}