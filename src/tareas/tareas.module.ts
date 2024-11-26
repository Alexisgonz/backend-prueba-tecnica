import { Module } from '@nestjs/common';
import { TareasService } from './tareas.service';
import { TareasController } from './tareas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tareas } from './entities/tarea.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tareas])],
  controllers: [TareasController],
  providers: [TareasService],
})
export class TareasModule {}
