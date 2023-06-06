//Dto для получения user по логину и паролю
import { IsNotEmpty, MinLength } from 'class-validator';

export class LogPasswdDto {
  @IsNotEmpty()
  login: string;
  @IsNotEmpty()
  password: string;
}
