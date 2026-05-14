import { registerEnumType } from '@nestjs/graphql';
 
export enum CharacterStatus {
  ALIVE = 'ALIVE',
  DEAD = 'DEAD',
  UNKNOWN = 'UNKNOWN',
}
 
registerEnumType(CharacterStatus, {
  name: 'CharacterStatus',
  description: 'The living status of a character',
  valuesMap: {
    ALIVE: { description: 'The character is alive' },
    DEAD: { description: 'The character is dead' },
    UNKNOWN: { description: 'The character status is unknown' },
  },
});
 