import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'userName' });
  }

  validate(userName: string, password: string) {
    const user = this.authService.validateUser({ userName, password });
    if (!user) throw new UnauthorizedException();
    return user;
  }
}
