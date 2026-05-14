import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { CharactersService } from './characters.service';
import { FilterCharactersInput } from './dto';
import { CharacterEntity } from './entities';

@Resolver(() => CharacterEntity)
export class CharactersResolver {
  constructor(private readonly charactersService: CharactersService) {}

  @Query(() => [CharacterEntity], {
    name: 'characters',
    description:
      'Retrieve a list of characters with optional filtering by status, gender, and a text search on name/description',
  })
  findAll(
    @Args('filters', {
      type: () => FilterCharactersInput,
      nullable: true,
      defaultValue: {},
      description: 'Optional filter criteria',
    })
    filters: FilterCharactersInput,
  ): Promise<CharacterEntity[]> {
    return this.charactersService.findAll(filters) as Promise<CharacterEntity[]>;
  }

  @Query(() => CharacterEntity, {
    name: 'character',
    description: 'Retrieve a single character by its unique ID',
  })
  findOne(
    @Args('id', { type: () => Int, description: 'Character ID' })
    id: number,
  ): Promise<CharacterEntity> {
    return this.charactersService.findById(id) as Promise<CharacterEntity>;
  }
}