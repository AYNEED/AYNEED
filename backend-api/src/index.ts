import 'src/utils/env';

import http from 'http';
import { ApolloServer } from 'apollo-server-express';
import { Theme } from '@apollographql/graphql-playground-html/dist/render-playground-page';

import { findUserByToken } from 'src/helpers/users';
import { resolvers, typeDefs } from 'src/resolvers';
import { expressServer } from 'src/express';
import { connect } from 'src/utils/mongodb';
import { version } from 'package.json';
import { checkTokens } from 'src/authJwt';

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
    let access = undefined;
    if (req.cookies) {
      access = req.cookies.authorization?.split('|');
    }
    if (!access) {
      return { req, res };
    }
    try {
      const allow = await checkTokens(req, res);
      if (allow === true) {
        const user = await findUserByToken(access[0]);
        return { user, req, res };
      } else {
        return { req, res };
      }
    } catch (e) {
      return { req, res };
    }
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
