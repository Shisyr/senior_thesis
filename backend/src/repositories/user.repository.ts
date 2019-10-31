import { EntityManager, EntityRepository, Repository } from 'typeorm';
import { UserEntity } from '../entities/user.entity';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserRepositoryInterface } from './interfaces/user.repository.interface';

@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> implements UserRepositoryInterface{

  async createUser(user: CreateUserDto, entityManager?: EntityManager) {
    const creationUser = this.create(user);
    return entityManager ? entityManager.save(creationUser) : this.save(creationUser);
  }

  async getUserByEmail(email: string) {
    return this.findOne({email});
  }
}
