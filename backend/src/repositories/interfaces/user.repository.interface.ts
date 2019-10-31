import { UserEntity } from '../../entities/user.entity';
import { CreateUserDto } from '../../dto/create-user.dto';

export interface UserRepositoryInterface {
  getUserByEmail(email: string): Promise<UserEntity>;
  createUser(user: CreateUserDto): Promise<UserEntity>;
}
