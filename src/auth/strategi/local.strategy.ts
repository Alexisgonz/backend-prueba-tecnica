import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { AuthService } from "../auth.service";
import { Strategy } from "passport-local";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super();
    }

    async validate(username: string, pass: string): Promise<any> {
        const user = await this.authService.validatedUser(username, pass);
        if (!user) {
            throw new UnauthorizedException('Credenciales no válidas');
        }

        return user;
    }
}
