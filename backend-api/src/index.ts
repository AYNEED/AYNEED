import 'src/utils/env';

import http from 'http';
import { ApolloServer } from 'apollo-server-express';
import { Theme } from '@apollographql/graphql-playground-html/dist/render-playground-page';

import { authentication } from 'src/middleware/authorization';
import { resolvers, typeDefs } from 'src/resolvers';
import { expressServer } from 'src/express';
import { connect } from 'src/utils/mongodb';
import { version } from 'package.json';
import { findUserById } from './helpers/users';

const theme = process.env.AYNEED_BACKEND_PLAYGROUND_THEME as Theme;
const port = process.env.AYNEED_BACKEND_API_PORT;

const httpServer = http.createServer(expressServer);

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
  context: async ({ req, res }) => {
    const userId = await authentication({ req, res });

    if (userId) {
      const user = findUserById(userId);
      return { user, req, res };
    }

    return { req, res };
  },
});

server.applyMiddleware({
  app: expressServer,
  path: server.subscriptionsPath,
  cors: {
    origin: process.env.AYNEED_BACKEND_CORS_ORIGIN,
    credentials: true,
  },
});

server.installSubscriptionHandlers(httpServer);

httpServer.listen({ port }, async () => {
  await connect();

  console.log(`🚀 Server ${version} ready at port ${port}`);
});
