import 'src/utils/env';

import { ApolloServer } from 'apollo-server';
import { Theme } from '@apollographql/graphql-playground-html/dist/render-playground-page';

import { typeDefs } from 'src/typeDefs';
import { resolvers } from 'src/resolvers';
import { version } from 'package.json';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: {
    settings: {
      'editor.theme': process.env
        .AYNEED_APOLLO_SERVER_PLAYGROUND_THEME as Theme,
      'request.credentials': 'same-origin',
    },
  },
});

server.listen({ port: process.env.AYNEED_BACKEND_API_PORT }).then(({ url }) => {
  console.log(`🚀 Server ${version} ready at ${url}`);
});
