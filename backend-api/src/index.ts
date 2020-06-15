import 'src/utils/env';

import { ApolloServer } from 'apollo-server';

import { typeDefs } from 'src/typeDefs';
import { resolvers } from 'src/resolvers';
import { version } from 'package.json';

const server = new ApolloServer({ typeDefs, resolvers });

server.listen({ port: process.env.AYNEED_BACKEND_API_PORT }).then(({ url }) => {
  console.log(`🚀 Server ${version} ready at ${url}`);
});
