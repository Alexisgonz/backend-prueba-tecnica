import { Usuario } from 'src/usuarios/entities/usuario.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'tareas' })
export class Tareas {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @CreateDateColumn({
    type: 'timestamptz',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamptz',
  })
  updatedAt: Date;

  @DeleteDateColumn({
    type: 'timestamptz',
  })
  deletedAt: Date;

  @Column()
  usuarioId: number;

  @ManyToOne(() => Usuario, (usuario) => usuario.tareas, {
    onDelete: 'CASCADE',
  })
  usuario: Usuario;
}
