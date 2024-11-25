import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private repo: Repository<Usuario>,
  ) {}

  create(createUsuarioDto: CreateUsuarioDto) {
    return this.repo.save(createUsuarioDto);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOne({ where: { id } });
  }

  findByUsername(username: string) {
    return this.repo.findOne({ where: { username } });
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return this.repo.update(id, updateUsuarioDto);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
