import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Media {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  url: string;

  @Column()
  name: string;

  @Column()
  mimeType: string;

  @Column()
  size: number;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;
}
