import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { Routes } from '../../const/routes';
import { SignUpDto } from '../dto/sign-up.dto';

@Controller(Routes.AUTH.MAIN)
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post(Routes.AUTH.SIGN_UP)
  signUp(@Body(new ValidationPipe({transform: true})) user: SignUpDto) {
    return this.authService.registerUser(user);
  }

  @Get()
  getHello(): string {
    return this.authService.getHello();
  }
}
