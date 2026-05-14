import { Injectable } from '@nestjs/common';
import { Character, Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma';
import { FilterCharactersInput } from './dto';
import { ICharacterRepository } from './interfaces';

@Injectable()
export class CharactersRepository implements ICharacterRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(filters: FilterCharactersInput): Promise<Character[]> {
    const where = this.buildWhereClause(filters);

    return this.prisma.character.findMany({
      where,
      orderBy: { name: 'asc' },
    });
  }

  async findById(id: number): Promise<Character | null> {
    return this.prisma.character.findUnique({
      where: { id },
    });
  }

  // ─── Private Helpers ──────────────────────────────────────────────────────

  private buildWhereClause(
    filters: FilterCharactersInput,
  ): Prisma.CharacterWhereInput {
    const { status, gender, search } = filters;
    const where: Prisma.CharacterWhereInput = {};

    if (status) {
      where.status = status;
    }

    if (gender) {
      where.gender = gender;
    }

    if (search?.trim()) {
      const term = search.trim();
      where.OR = [
        { name: { contains: term } },
        { description: { contains: term } },
      ];
    }

    return where;
  }
}