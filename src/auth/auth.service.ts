import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AuthPayloadDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { UserRepository } from 'src/user/repositories/user.repository';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userRepository: UserRepository,
  ) {}
  async validateUser({ userName, password }: AuthPayloadDto) {
    const user = await this.userRepository.findOneByGmailOrPhone(userName);
    if (!user) {
      throw new HttpException(
        'მომხმარებლის სახელი ან პაროლი არასწორია',
        HttpStatus.NOT_FOUND,
      );
    }
    if (password === user.password) {
      return this.jwtService.sign({
        id: user.id,
        role: user.role,
      });
    } else {
      throw new HttpException(
        'მომხმარებლის სახელი ან პაროლი არასწორია',
        HttpStatus.NOT_FOUND,
      );
    }
  }
}
