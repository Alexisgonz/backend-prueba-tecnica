import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { HashService } from 'config/services/hash.service';
import { UsuariosService } from 'src/usuarios/usuarios.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsuariosService,
    private jwtService: JwtService,
  ) {}

  async validatedUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findByUsername(username);
    if (!user) {
      return null;
    }
    const passwordMatch = await HashService.comparePassword(
      pass,
      user.password,
    );
    return passwordMatch ? user : null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.id };
    const token = this.jwtService.sign(payload);
    console.log('Generated Token:', token);
    return {
      access_token: token,
    };
  }
}
