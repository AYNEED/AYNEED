import 'src/utils/env';

import { ApolloServer } from 'apollo-server';
import { Theme } from '@apollographql/graphql-playground-html/dist/render-playground-page';

import { typeDefs } from 'src/typeDefs';
import { resolvers } from 'src/resolvers';
import { version } from 'package.json';

const theme = process.env.AYNEED_BACKEND_PLAYGROUND_THEME as Theme;
const port = process.env.AYNEED_BACKEND_API_PORT;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: {
    settings: {
      'editor.theme': theme,
      'request.credentials': 'same-origin',
    },
  },
});

server.listen({ port }).then(({ url, subscriptionsUrl }) => {
  console.log(`🚀 Server ${version} ready at ${url}`);
  console.log(`Subscriptions ready at ${subscriptionsUrl}`);
});
