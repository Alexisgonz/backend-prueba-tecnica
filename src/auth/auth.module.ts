import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsuariosModule } from 'src/usuarios/usuarios.module';
import { ConfigModule } from '@nestjs/config';
import jwtConfig from 'config/jwt.config';
import { JwtModule } from '@nestjs/jwt';
import { JwtConfigService } from 'config/jwt-config.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategi/local.strategy';
import { JwtStrategy } from './strategi/jwt-strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from 'src/usuarios/entities/usuario.entity';

@Module({
  imports: [
    UsuariosModule,
    PassportModule,
    ConfigModule.forFeature(jwtConfig),
    JwtModule.registerAsync({
      useClass: JwtConfigService,
      imports: [ConfigModule.forFeature(jwtConfig)],
    }),
    TypeOrmModule.forFeature([Usuario]),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
})
export class AuthModule {}
