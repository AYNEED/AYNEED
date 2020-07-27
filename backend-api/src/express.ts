import express from 'express';
import session from 'express-session';
import passport from 'passport';
import { GraphQLLocalStrategy } from 'graphql-passport';

import { User } from 'src/__generated__';

export const app = express();

const sessionParser = session({
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 30 * 1000, // 30 days
  },
  resave: false,
  saveUninitialized: false,
  secret: process.env.AYNEED_BACKEND_SESSION_SECRET || '',
});

passport.use(
  new GraphQLLocalStrategy((email, password, cb) => {
    return cb(null, {});
  })
);

passport.serializeUser((id: User['id'], cb) => cb(null, id));
passport.deserializeUser((id: User['id'], cb) => cb(null, id));

app.use(sessionParser);

app.use(passport.initialize());
app.use(passport.session());

export const expressServer = app;
