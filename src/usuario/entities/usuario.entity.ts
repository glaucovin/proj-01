import { Prisma } from '@prisma/client';
export class Usuario implements Prisma.UsuarioUncheckedCreateInput {
  id?: number;
  email: string;
  nome: string;
  criado_em?: string | Date;
}
