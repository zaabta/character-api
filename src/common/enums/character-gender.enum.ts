// src/common/enums/character-gender.enum.ts
import { registerEnumType } from '@nestjs/graphql';

export enum CharacterGender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  UNKNOWN = 'UNKNOWN',
}

registerEnumType(CharacterGender, {
  name: 'CharacterGender',
  description: 'The gender of a character',
  valuesMap: {
    MALE: { description: 'Male character' },
    FEMALE: { description: 'Female character' },
    UNKNOWN: { description: 'Gender is unknown' },
  },
});