import { IsDefined, IsNotEmpty, IsOptional } from 'class-validator';
import {ApiModelProperty} from '@nestjs/swagger';

export class SignUpDto {
  @ApiModelProperty()
  @IsDefined()
  @IsNotEmpty()
  firstName: string;

  @ApiModelProperty()
  @IsDefined()
  @IsNotEmpty()
  lastName: string;

  @ApiModelProperty()
  @IsDefined()
  @IsNotEmpty()
  password: string;

  @ApiModelProperty()
  @IsDefined()
  @IsNotEmpty()
  email: string;

  @ApiModelProperty()
  @IsOptional()
  middleName?: string;

  @ApiModelProperty()
  @IsOptional()
  phone?: string;
}
