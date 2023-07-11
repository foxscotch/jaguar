import { hashPassword, checkPassword } from "$lib/server/hash-password";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  passwordHash: string;

  async setPassword(password: string) {
    this.passwordHash = await hashPassword(password);
  }

  async checkPassword(password: string) {
    return await checkPassword(password, this.passwordHash);
  }
}
