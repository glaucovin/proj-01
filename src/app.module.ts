import { Module } from '@nestjs/common';
import { UsuariosModule } from './usuarios/usuarios.module';
import { FilmesModule } from './filmes/filmes.module';

@Module({
  imports: [UsuariosModule, FilmesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
