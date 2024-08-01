import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Media } from '../media/media.entity';
import { User } from '../user/user.entity';
import { Comment } from './comment/comment.entity';

@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  id?: number;

  @OneToOne(() => Media)
  @JoinColumn()
  media: Media;

  @OneToMany(() => Comment, (comment) => comment.photo)
  comments?: Comment[];

  @ManyToOne(() => User)
  user: User;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;
}
