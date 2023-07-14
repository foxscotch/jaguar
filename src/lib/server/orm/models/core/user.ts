import { hashPassword, checkPassword } from "$lib/server/hash-password";
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Session from "./session";

@Entity()
export default class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  passwordHash: string;

  @OneToMany(() => Session, (session) => session.user)
  sessions: Session[];

  async setPassword(password: string) {
    this.passwordHash = await hashPassword(password);
  }

  async checkPassword(password: string) {
    return await checkPassword(password, this.passwordHash);
  }
}
