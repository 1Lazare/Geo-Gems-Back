import { IsNotEmpty, IsString } from 'class-validator';

export class AuthPayloadDto {
  @IsString()
  @IsNotEmpty()
  userName!: string;

  @IsString()
  @IsNotEmpty()
  password!: string;
}
