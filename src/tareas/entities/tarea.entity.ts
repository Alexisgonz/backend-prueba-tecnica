import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tareas' })
export class Tarea {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;
}
