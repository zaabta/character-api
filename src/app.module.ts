import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { CharactersModule } from './characters/characters.module';
import { appConfig } from './config/app.config';
import { GraphQLConfig } from './config/graphql.config';
import { PrismaModule } from 'prisma';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig],
      envFilePath: '.env',
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useClass: GraphQLConfig,
    }),
    PrismaModule,
    CharactersModule,
  ],
})
export class AppModule {}