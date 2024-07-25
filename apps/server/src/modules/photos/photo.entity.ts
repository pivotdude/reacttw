import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Media } from '../media/media.entity';
import { User } from '../user/user.entity';

@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  id?: number;

  @OneToOne(() => Media)
  @JoinColumn()
  media: Media;

  @ManyToOne(() => User)
  user: User;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;
}
