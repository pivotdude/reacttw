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
import { Photo } from '../photos/photo.entity';
import { Media } from '../media/media.entity';

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

  @Column({ default: true })
  isActive?: boolean;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;
}
