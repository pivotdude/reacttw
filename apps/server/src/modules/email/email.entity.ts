import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { EmailType } from './emailType/emailType.entity';

@Entity()
export class Email {
  @PrimaryGeneratedColumn()
  id?: number;

  @ManyToOne(() => EmailType)
  type: EmailType;

  @Column()
  email: string;

  @Column('simple-json', { nullable: true })
  data: {
    code: string;
  };

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;
}
