import { PassportSerializer } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories/user.repository';

type DoneFunctionType = (error: Error, data: any | string) => void;

@Injectable()
export class SessionSerializer extends PassportSerializer {
  constructor(private readonly userRepository: UserRepository) {
    super();
  }

  serializeUser(user: any, done: DoneFunctionType): any {
    console.log('sdfsdf', user);
    done(null, user);
  }

  deserializeUser(payload: any, done: DoneFunctionType): any {
    done(null, payload);
  }
}
