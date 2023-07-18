import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import User from './user';

export const SESSION_ID_LENGTH = 24;

@Entity()
export default class Session extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.sessions)
  user: User;

  @Column({ update: false, length: SESSION_ID_LENGTH * 2 })
  @Index({ unique: true })
  sessionId: string;

  @Column()
  origin: string;

  @Column({ nullable: true })
  source: string;

  @Column({ nullable: true })
  geo: string;

  @Column({ nullable: true })
  userAgent: string;

  generateId(): Promise<string> {
    return new Promise((resolve, reject) =>
      randomBytes(SESSION_ID_LENGTH, (error, buffer) => {
        if (error) reject(error);
        else resolve(buffer.toString("hex"));
      })
    );
  }
}
