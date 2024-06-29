import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { Media } from '../media/media.entity';

@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  id?: number;

  @ManyToOne(() => Media)
  media: Media;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
