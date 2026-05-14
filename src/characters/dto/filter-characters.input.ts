import { Field, InputType } from '@nestjs/graphql';
import { IsEnum, IsOptional, IsString, MaxLength } from 'class-validator';
import { CharacterGender, CharacterStatus } from '../../common/enums';

@InputType({ description: 'Filters for querying characters' })
export class FilterCharactersInput {
  @Field(() => CharacterStatus, {
    nullable: true,
    description: 'Filter by character status',
  })
  @IsOptional()
  @IsEnum(CharacterStatus)
  status?: CharacterStatus;

  @Field(() => CharacterGender, {
    nullable: true,
    description: 'Filter by character gender',
  })
  @IsOptional()
  @IsEnum(CharacterGender)
  gender?: CharacterGender;

  @Field({
    nullable: true,
    description: 'Search term applied to name and description fields',
  })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  search?: string;
}