import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, UpdateDateColumn } from 'typeorm';
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

  @Column('boolean', {default: false})
  checked: boolean;

  @UpdateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}