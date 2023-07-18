import { randomBytes } from "node:crypto";
import {
  BaseEntity,
  Column,
  Entity,
  Index,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import User from "./user";

/** Session ID length in bytes. */
export const SESSION_ID_LENGTH = 24;

/** TypeORM entity representing a user's session. */
@Entity()
export default class Session extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  /** User the session belongs to. */
  @ManyToOne(() => User, (user) => user.sessions)
  user: User;

  /** Session ID in hex bytes. This is the value of the session cookie. */
  @Column({ update: false, length: SESSION_ID_LENGTH * 2 })
  @Index({ unique: true })
  sessionId: string;

  /** Hostname cookie belongs to. */
  @Column()
  origin: string;

  /** End user's IP address, if available. */
  @Column({ nullable: true })
  source: string;

  /** End user's geolocation, if available. */
  @Column({ nullable: true })
  geo: string;

  /** End user's user agent, if available. */
  @Column({ nullable: true })
  userAgent: string;

  /** Generate a session ID. */
  generateId(): Promise<string> {
    return new Promise((resolve, reject) =>
      randomBytes(SESSION_ID_LENGTH, (error, buffer) => {
        if (error) reject(error);
        else resolve(buffer.toString("hex"));
      })
    );
  }
}
