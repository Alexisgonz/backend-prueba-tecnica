import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTareaDto } from './dto/create-tarea.dto';
import { UpdateTareaDto } from './dto/update-tarea.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tareas } from './entities/tarea.entity';

@Injectable()
export class TareasService {
  constructor(
    @InjectRepository(Tareas)
    private repo: Repository<Tareas>,
  ) {
    // 
  }

  create(createTareaDto: CreateTareaDto) {
    return this.repo.save(createTareaDto);
  }

  findAll(id: number) {
    return this.repo.find({
      where: {
        usuarioId: id,
      },
      order: { id: 'ASC' },
    });
  }

  async getTareasPaginadas(page: number, limit: number, userId: number) {
    const [result, total] = await this.repo.findAndCount({
      where: { usuarioId: userId },
      order: { createdAt: 'DESC' },
      skip: page * limit,
      take: limit,
    });
    return {
      data: result,
      totalItems: total,
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} tarea`;
  }

  async update(id: number, updateTareaDto: UpdateTareaDto) {
    const tarea = await this.repo.findOne({ where: { id } });

    if (!tarea) {
      throw new NotFoundException(`Tarea con ID ${id} no encontrada`);
    }

    Object.assign(tarea, updateTareaDto);

    return await this.repo.save(tarea);
  }

  async remove(id: number): Promise<boolean> {
    const tarea = await this.repo.findOne({ where: { id } });

    if (!tarea) {
      throw new Error(`Tarea con ID ${id} no encontrada`);
    }

    await this.repo.softRemove(tarea);

    return true;
  }
}
