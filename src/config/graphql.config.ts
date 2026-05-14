import { ApolloDriverConfig } from '@nestjs/apollo';
import { Injectable } from '@nestjs/common';
import { GqlOptionsFactory } from '@nestjs/graphql';
import { join } from 'path';

@Injectable()
export class GraphQLConfig implements GqlOptionsFactory {
  createGqlOptions(): ApolloDriverConfig {
    const isDev = process.env.NODE_ENV !== 'production';

    return {
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      playground: isDev,
      introspection: true,
      context: ({ req }: { req: Request }) => ({ req }),
      formatError: (error) => ({
        message: error.message,
        code: error.extensions?.code,
        path: error.path,
      }),
    };
  }
}