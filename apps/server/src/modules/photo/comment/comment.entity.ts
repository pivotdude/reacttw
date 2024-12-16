import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  Column,
  OneToMany,
} from 'typeorm';
import { User } from '@m/user/user.entity';
import { Photo } from '../photo.entity';
import { CommentLike } from './commentLike/commentLike.entity';

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

  @OneToMany(() => Comment, (comment) => comment.parent, { nullable: true })
  commentsLikes?: Comment[];

  @ManyToOne(() => Comment, (comment) => comment.commentsLikes)
  parent: Comment;

  @ManyToOne(() => User, (user) => user.replyComments)
  replyToUserId?: User;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;

  @OneToMany(() => CommentLike, (commentLike) => commentLike.comment)
  likes?: CommentLike[];
}
