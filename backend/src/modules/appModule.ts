import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as ormOptions from '../ormconfig';
import { AuthModule } from './authModule';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormOptions),
    AuthModule
  ]
})

export class AppModule {}
