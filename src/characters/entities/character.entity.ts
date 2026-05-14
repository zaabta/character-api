import { Field, Int, ObjectType } from '@nestjs/graphql';
import { CharacterGender, CharacterStatus } from '../../common/enums';

@ObjectType({ description: 'Represents a character in the system' })
export class CharacterEntity {
  @Field(() => Int, { description: 'Unique identifier' })
  id!: number;

  @Field({ description: 'Full name of the character' })
  name!: string;

  @Field({ description: 'URL to the character image' })
  image!: string;

  @Field(() => CharacterStatus, { description: 'Living status of the character' })
  status!: CharacterStatus;

  @Field(() => CharacterGender, { description: 'Gender of the character' })
  gender!: CharacterGender;

  @Field({ description: 'Brief description of the character' })
  description!: string;

  @Field({ description: 'Creation timestamp' })
  createdAt!: Date;

  @Field({ description: 'Last update timestamp' })
  updatedAt!: Date;
}