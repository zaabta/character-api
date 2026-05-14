import { Character } from '@prisma/client';
import { FilterCharactersInput } from '../dto';

export interface ICharacterRepository {
  findAll(filters: FilterCharactersInput): Promise<Character[]>;
  findById(id: number): Promise<Character | null>;
}

export const CHARACTER_REPOSITORY = Symbol('ICharacterRepository');