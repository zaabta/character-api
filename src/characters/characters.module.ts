import { Module } from '@nestjs/common';
import { CharactersRepository } from './characters.repository';
import { CharactersResolver } from './characters.resolver';
import { CharactersService } from './characters.service';

@Module({
  providers: [CharactersResolver, CharactersService, CharactersRepository],
})
export class CharactersModule {}