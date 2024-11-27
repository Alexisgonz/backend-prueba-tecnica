import { Tareas } from 'src/tareas/entities/tarea.entity'
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'usuarios' })
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @OneToMany(() => Tareas, (tarea) => tarea.usuario)
  tareas: Tareas[];
}
