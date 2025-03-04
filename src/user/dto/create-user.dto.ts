import { IsString, IsEnum, IsDateString, IsPhoneNumber, IsNotEmpty, MinLength } from 'class-validator';
import { UserGender } from 'src/enums/user-gender.enum';
import { UserRole } from 'src/enums/user-role.enum';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  gmail!: string;

  @IsEnum(UserGender)
  gender!: UserGender;

  @IsString()
  @IsNotEmpty()
  firstName!: string;

  @IsString()
  @IsNotEmpty()
  lastName!: string;

  @IsDateString()
  birthDate!: Date;

  @IsPhoneNumber(undefined)
  phoneNumber!: number;

  @IsString()
  @MinLength(6)
  password!: string;

  @IsEnum(UserRole)
  role!: UserRole;
}
