import { Usuario } from '../entities/usuario.entity';

export class CreateUsuarioDto extends Usuario {
  email: string;
  nome: string;
  criado_em?: string | Date;
}
