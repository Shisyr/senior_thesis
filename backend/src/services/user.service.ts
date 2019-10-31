import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from '../repositories/user.repository';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserEntity } from '../entities/user.entity';

@Injectable()
export class UserService {
  constructor(@InjectRepository(UserRepository) private readonly userRepository: UserRepository) {}

  async createUser(user: CreateUserDto): Promise<UserEntity> {
    return this.userRepository.createUser(user);
  }

  async getUserByEmail(email: string) {
    return this.userRepository.getUserByEmail(email);
  }
}
