import { Module } from '@nestjs/common';
import { AuthController } from '../controllers/authController';
import { AuthService } from '../services/auth.service';

@Module({
  imports: [],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
