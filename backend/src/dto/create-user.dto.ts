import { IsDefined, IsNotEmpty, IsOptional } from 'class-validator';
import {ApiModelProperty} from '@nestjs/swagger';

export class CreateUserDto {

  @IsDefined()
  @IsNotEmpty()
  firstName: string;

  @IsDefined()
  @IsNotEmpty()
  lastName: string;

  @IsDefined()
  @IsNotEmpty()
  password: string;

  @IsDefined()
  @IsNotEmpty()
  email: string;

  @IsOptional()
  middleName?: string;

  @IsOptional()
  phone?: string;
}
