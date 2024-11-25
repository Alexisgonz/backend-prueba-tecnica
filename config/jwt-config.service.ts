import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtModuleOptions, JwtOptionsFactory } from "@nestjs/jwt";

@Injectable()
export class JwtConfigService implements JwtOptionsFactory {
    constructor(private readonly configService: ConfigService) { }

    createJwtOptions(): JwtModuleOptions {
        const jwt = this.configService.get('jwt-config');
        if (!jwt) {
            throw new Error('JWT configuration is missing');
        }
        return {
            secret: 'secret',
            signOptions: { expiresIn: '1h' },
        };
    }
}