import 'src/utils/env';

import { ApolloServer } from 'apollo-server';
import { Theme } from '@apollographql/graphql-playground-html/dist/render-playground-page';

import { typeDefs } from 'src/typeDefs';
import { resolvers } from 'src/resolvers';
import { connect } from 'src/utils/mongodb';
import { version } from 'package.json';

const theme = process.env.AYNEED_BACKEND_PLAYGROUND_THEME as Theme;
const port = process.env.AYNEED_BACKEND_API_PORT;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  subscriptions: {
    path: '/',
  },
  playground: {
    settings: {
      'editor.theme': theme,
      'request.credentials': 'same-origin',
    },
  },
});

server.listen({ port }).then(async ({ url, subscriptionsUrl }) => {
  await connect();

  console.log(`🚀 Server ${version} ready at ${url}`);
  console.log(`Subscriptions ready at ${subscriptionsUrl}`);
});
