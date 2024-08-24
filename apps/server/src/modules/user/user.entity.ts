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
import { Photo } from '@m/photo/photo.entity';
import { Media } from '@m/media/media.entity';
import { PhotoLike } from '@m/photo/photoLike/photoLike.entity';
import { Subscription } from '@m/subscription/subscription.entity';
import { PhotoSaves } from '@m/photo/photoSaves/photoSaves.entity';

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

  @Column({ default: true })
  isActive?: boolean;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;

  @OneToMany(() => Photo, (photo) => photo.user, { nullable: true })
  photos?: Photo[];

  @OneToMany(() => PhotoLike, (photoLike) => photoLike.user, { nullable: true })
  photosLikes?: PhotoLike[];

  @OneToMany(() => PhotoSaves, (photoSaves) => photoSaves.user, {
    nullable: true,
  })
  savedPhotos?: PhotoSaves[];

  @OneToMany(() => PhotoLike, (photoLike) => photoLike.user, { nullable: true })
  commentsLikes?: PhotoLike[];

  @OneToMany(() => Subscription, (subscription) => subscription.user, {
    nullable: true,
  })
  subscriptions?: Subscription[];

  @OneToMany(() => Subscription, (subscription) => subscription.author, {
    nullable: true,
  })
  subscribers?: Subscription[];
}
