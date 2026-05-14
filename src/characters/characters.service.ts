import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { Character } from '@prisma/client';
import { FilterCharactersInput } from './dto';
import { CharactersRepository } from './characters.repository';

@Injectable()
export class CharactersService {
  private readonly logger = new Logger(CharactersService.name);

  constructor(private readonly charactersRepository: CharactersRepository) {}

  async findAll(filters: FilterCharactersInput): Promise<Character[]> {
    this.logger.debug(`Fetching characters with filters: ${JSON.stringify(filters)}`);

    const characters = await this.charactersRepository.findAll(filters);

    this.logger.debug(`Found ${characters.length} characters`);
    return characters;
  }

  async findById(id: number): Promise<Character> {
    this.logger.debug(`Fetching character with id: ${id}`);

    const character = await this.charactersRepository.findById(id);

    if (!character) {
      throw new NotFoundException(`Character with id ${id} not found`);
    }

    return character;
  }
}