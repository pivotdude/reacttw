import { User } from 'src/modules/user/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  Column,
} from 'typeorm';
import { Photo } from '../photo.entity';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  text: string;

  @ManyToOne(() => Photo)
  photo: Photo;

  @ManyToOne(() => User)
  user: User;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;
}
