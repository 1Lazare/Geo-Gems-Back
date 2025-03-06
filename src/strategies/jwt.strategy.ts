import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import * as dotenv from 'dotenv';
import { Injectable } from '@nestjs/common';
import { UserInterface } from 'src/interfaces/user.interaface';
dotenv.config({ path: '.env' });

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'user') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET!,
    });
  }

  validate(payload: UserInterface) {
    return payload;
  }
}
