import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Photo } from '../photo.entity';
import { User } from 'src/modules/user/user.entity';

@Entity()
export class PhotoLike {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  isLike: boolean;

  @ManyToOne(() => Photo, (photo) => photo.likes)
  photo: Photo;

  @ManyToOne(() => User, (user) => user.photosLikes)
  user: User;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;
}
