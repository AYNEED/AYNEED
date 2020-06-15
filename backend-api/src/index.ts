import { ApolloServer } from 'apollo-server';

import { typeDefs } from 'src/typeDefs';
import { resolvers } from 'src/resolvers';
import { version } from 'package.json';

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀 Server ${version} ready at ${url}`);
});
