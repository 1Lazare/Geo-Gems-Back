import { IsString, IsEnum, IsDateString, IsPhoneNumber, IsNotEmpty, MinLength, Matches } from 'class-validator';
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

  @IsPhoneNumber('GE')
  @Matches(/^\+995\d{9}$/, { message: 'Phone number must start with +995 and have 9 digits in total' }) 
  phoneNumber!: string;

  @IsString()
  @MinLength(6)
  password!: string;

  @IsEnum(UserRole)
  role!: UserRole;
}
