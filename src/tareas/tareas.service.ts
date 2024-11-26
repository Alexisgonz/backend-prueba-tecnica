import { Injectable } from '@nestjs/common';
import { CreateTareaDto } from './dto/create-tarea.dto';
import { UpdateTareaDto } from './dto/update-tarea.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tareas } from './entities/tarea.entity';
import { Public } from 'src/decorators/is-public';

@Injectable()
export class TareasService {
  constructor(
    @InjectRepository(Tareas)
    private repo: Repository<Tareas>,
  ) {}

  create(createTareaDto: CreateTareaDto) {
    return this.repo.save(createTareaDto);
  }

  findAll() {
    return this.repo.find({ order: { id: 'ASC' } });
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  update(id: number, updateTareaDto: UpdateTareaDto) {
    return this.repo.update(id, updateTareaDto);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
