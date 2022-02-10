import { Filme } from '../entities/filme.entity';

export class CreateFilmeDto extends Filme {
  titulo: string;
  imagem?: string;
  generoId: number;
}
