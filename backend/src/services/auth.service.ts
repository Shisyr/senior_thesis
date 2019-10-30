import { Injectable } from '@nestjs/common';
import { SignUpDto } from '../dto/sign-up.dto';

@Injectable()
export class AuthService {
  getHello(): string {
    return 'Hello World!';
  }

  async registerUser(user: SignUpDto) {
    return user;
  }
}
