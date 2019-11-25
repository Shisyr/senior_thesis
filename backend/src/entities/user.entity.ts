import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('User')
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({name: 'first_name'})
  firstName: string;

  @Column({name: 'last_name'})
  lastName: string;

  @Column({name: 'middle_name', nullable: true})
  middleName: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column({nullable: true})
  phone: string;
}
