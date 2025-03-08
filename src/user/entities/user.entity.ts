import { UserGender } from 'src/enums/user-gender.enum';
import { UserRole } from 'src/enums/user-role.enum';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  gmail!: string;

  @Column({
    type: 'enum',
    enum: UserGender,
  })
  gender!: UserGender;

  @Column()
  firstName!: string;

  @Column()
  lastName!: string;

  @Column()
  birthDate!: Date;

  @Column()
  phoneNumber!: string;

  @Column()
  password!: string;

  @Column({
    type: 'enum',
    enum: UserRole,
  })
  role!: UserRole;

  @CreateDateColumn()
  createdAt!: Date

  @UpdateDateColumn({
    nullable: true
  })
  updatedAt?: Date;

  @DeleteDateColumn({ nullable: true})
  deletedAt?: Date;
}
