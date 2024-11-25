import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(configService: ConfigService) {
    const jwt = configService.get('jwt');
    super({
      signOptions: { expiresIn: '1h' },
      secretOrKey: 'secret',
    });
  }
}