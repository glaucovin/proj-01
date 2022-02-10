import { Prisma } from '@prisma/client';

export class CreateUsuarioDto implements Prisma.UsuarioCreateInput {
  email: string;
  nome: string;
  criado_em?: string | Date;
}
