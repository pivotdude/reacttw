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
import { Media } from '@m/media/media.entity';
import { User } from '@m/user/user.entity';
import { Comment } from './comment/comment.entity';
import { PhotoLike } from './photoLike/photoLike.entity';
import { PhotoSaves } from './photoSaves/photoSaves.entity';

@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  id?: number;

  @OneToOne(() => Media)
  @JoinColumn()
  media: Media;

  @OneToMany(() => Comment, (comment) => comment.photo)
  comments?: Comment[];

  @OneToMany(() => PhotoSaves, (photoSaves) => photoSaves.photo)
  photoSaves: PhotoSaves[];

  @OneToMany(() => PhotoLike, (photoLike) => photoLike.photo)
  likes?: PhotoLike[];

  @ManyToOne(() => User)
  user: User;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;
}
