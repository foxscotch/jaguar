import { hashPassword, checkPassword } from "$lib/server/hash-password";
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import Session from "./session";

/** TypeORM entity representing a user. */
@Entity()
export default class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  /** User's username. */
  @Column()
  username: string;

  /** User's hashed password. */
  @Column()
  passwordHash: string;

  /**
   * Whether or not the user is a superuser. I don't currently have anything
   * planned for this, but it's good to prepare for the future.
   */
  @Column()
  superuser: boolean;

  /** List of this user's existing sessions. */
  @OneToMany(() => Session, (session) => session.user)
  sessions: Session[];

  /**
   * Sets the user's {@link passwordHash} property to a hash of the passed
   * password. This does _not_ save the user.
   */
  async setPassword(password: string) {
    this.passwordHash = await hashPassword(password);
  }

  /** Check's the provided password against the user's saved hash. */
  async checkPassword(password: string) {
    return await checkPassword(password, this.passwordHash);
  }
}
