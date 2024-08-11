import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Photo } from '../photo/photo.entity';
import { Media } from '../media/media.entity';
import { PhotoLike } from '../photo/photoLike/photoLike.entity';
import { Subscription } from '../subscription/subscription.entity';
import { PhotoSaves } from '../photo/photoSaves/photoSaves.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ nullable: true })
  name?: string;

  @Column({ unique: true })
  login: string;

  @Column({ unique: true })
  email: string;

  @OneToOne(() => Media)
  @JoinColumn()
  avatar?: Media;

  @OneToMany(() => Photo, (photo) => photo.user, { nullable: true })
  photos?: Photo[];

  @OneToMany(() => PhotoLike, (photoLike) => photoLike.user, { nullable: true })
  photosLikes?: PhotoLike[];

  @Column({ default: true })
  isActive?: boolean;

  @OneToMany(() => PhotoSaves, (photoSaves) => photoSaves.user, {
    nullable: true,
  })
  savedPhotos?: PhotoSaves[];

  @OneToMany(() => Subscription, (subscription) => subscription.user, {
    nullable: true,
  })
  subscriptions?: Subscription[];

  @OneToMany(() => Subscription, (subscription) => subscription.author, {
    nullable: true,
  })
  subscribers?: Subscription[];

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;
}
