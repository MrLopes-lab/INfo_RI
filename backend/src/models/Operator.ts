import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('operators')
export default class Operator {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;
}