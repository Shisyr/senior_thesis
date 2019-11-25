import { ForbiddenException, Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { SignUpDto } from '../dto/sign-up.dto';
import { FAILED_RESPONSES } from '../../const/failed-response-messages';
import { UserService } from './user.service';

@Injectable()
export class AuthService {
  constructor(
    @Inject(UserService) private readonly userService: UserService
  ) {}

  async registerUser(creationUser: SignUpDto) {
    const user = await this.userService.getUserByEmail(creationUser.email);
    if (user) {
      throw new ForbiddenException(FAILED_RESPONSES.USER_EXISTS);
    }
    return this.userService.createUser(user);
  }

  async validateUser(email: string, password: string) {
    const user = await this.userService.getUserByEmail(email);
    if (user && user.password === password) {
      const { password: pass, ...result } = user;
      return result;
    }
    return null;
  }

  async getCurrentUser(email: string) {
    const user = await this.userService.getUserByEmail(email);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
