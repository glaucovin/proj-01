import { Prisma } from '@prisma/client';
export class Filme implements Prisma.FilmeUncheckedCreateInput {
  id?: number;
  titulo: string;
  imagem?: string;
  generoId: number;
}
