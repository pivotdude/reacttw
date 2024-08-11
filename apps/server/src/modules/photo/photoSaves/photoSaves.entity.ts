import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { Photo } from '../photo.entity';
import { User } from 'src/modules/user/user.entity';

@Entity()
export class PhotoSaves {
  @PrimaryGeneratedColumn()
  id?: number;

  @ManyToOne(() => Photo, (photo) => photo.photoSaves)
  photo: Photo;

  @ManyToOne(() => User, (user) => user.savedPhotos)
  user: User;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;
}
