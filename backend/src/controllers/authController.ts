import { Body, Controller, Get, HttpCode, HttpStatus, Post, Request, UseGuards, ValidationPipe } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { Routes } from '../../const/routes';
import { SignUpDto } from '../dto/sign-up.dto';
import { LoginGuard } from '../guards/login.guard';
import { AuthGuard } from '@nestjs/passport';
import { AuthenticatedGuard } from '../guards/authenticated.guard';

@Controller(Routes.AUTH.MAIN)
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post(Routes.AUTH.SIGN_UP)
  signUp(@Body(new ValidationPipe({transform: true})) user: SignUpDto) {
    return this.authService.registerUser(user);
  }

  @Post(Routes.AUTH.SIGN_IN)
  @HttpCode(HttpStatus.OK)
  @UseGuards(LoginGuard)
  signIn(@Request() req) {
    console.log(req.session.passport.user);
    return req.user;
  }

  @Get(Routes.AUTH.ME)
  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthenticatedGuard)
  currentUser(@Request() req) {
    return this.authService.getCurrentUser(req.user.email);
  }
}
