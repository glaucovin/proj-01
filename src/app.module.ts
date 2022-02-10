import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { FilmeModule } from './filme/filme.module';
import { GeneroModule } from './genero/genero.module';
import { AtorModule } from './ator/ator.module';

@Module({
  imports: [UsuarioModule, FilmeModule, GeneroModule, AtorModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
