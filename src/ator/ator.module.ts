import { Module } from '@nestjs/common';
import { AtorService } from './ator.service';
import { AtorController } from './ator.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [AtorController],
  providers: [AtorService, PrismaService],
})
export class AtorModule {}
