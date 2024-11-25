import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsuariosService } from 'src/usuarios/usuarios.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsuariosService,
    private jwtService: JwtService,
  ) { }

  // async signIn(
  //   username: string,
  //   password: string,
  // ): Promise<{ access_token: string }> {
  //   const user = await this.usersService.findByUsername(username);
  //   if (user?.password !== password) {
  //     throw new Error('Credenciales incorrectas');
  //   }
  //   const payload = { username: user.username, sub: user.id };
  //   return {
  //     access_token: this.jwtService.sign(payload),
  //   };
  // }

  async validatedUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findByUsername(username);
    if (user && user.password === pass) {
      return user;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
