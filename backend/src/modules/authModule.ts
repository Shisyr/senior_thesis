import { Module } from '@nestjs/common';
import { AuthController } from '../controllers/authController';
import { AuthService } from '../services/auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from '../repositories/user.repository';
import { UserModule } from './user.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from '../strategies/local.strategy';
import { SessionSerializer } from '../serializers/session.serializer';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserRepository]),
    UserModule,
    PassportModule.register({
      session: true
    })
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, SessionSerializer],
  exports: [PassportModule]
})
export class AuthModule {}
