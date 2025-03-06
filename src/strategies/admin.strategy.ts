import { HttpException, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserRole } from 'src/enums/user-role.enum';
import { UserInterface } from 'src/interfaces/user.interaface';

@Injectable()
export class AdminJwtStrategy extends PassportStrategy(Strategy, 'admin') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET!,
    });
  }

  async validate(payload: UserInterface) {
    if (payload.role !== UserRole.ADMIN) {
      throw new HttpException('You are not an admin', 460);
    }
    return payload;
  }
}
