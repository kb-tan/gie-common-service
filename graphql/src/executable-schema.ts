import { makeExecutableSchema } from '@graphql-tools/schema';
import { resolvers } from './schema/resolvers';
import { typeDefs } from './schema/typedefs';
export const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });