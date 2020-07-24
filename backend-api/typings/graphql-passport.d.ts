declare module 'graphql-passport' {
  import express from 'express';
  import { ExecutionParams } from 'subscriptions-transport-ws';
  import { Strategy, StrategyCreated } from 'passport-strategy';

  export interface ExpressContext {
    req: express.Request;
    res: express.Response;
    connection?: ExecutionParams;
  }

  export interface GraphQLPassportContext extends ExpressContext {
    isAuthenticated: () => boolean;
    isUnauthenticated: () => boolean;
    getUser: <TUser>() => TUser;
    authenticate: <TUser, TInfo = any>(
      name: 'graphql-local',
      options: { email: string; password: string }
    ) => Promise<{ user: TUser; info: TInfo }>;
    login: <TUser = any>(user: TUser) => Promise<void>;
    logout: () => void;
  }

  interface IVerifyOptions {
    message: string;
  }

  export interface VerifyFunction {
    (
      username: string,
      password: string,
      done: (error: any, user?: any, options?: IVerifyOptions) => void
    ): void;
  }

  export const buildContext: (
    context: ExpressContext
  ) => GraphQLPassportContext;

  export class GraphQLLocalStrategy extends Strategy {
    constructor(verify: VerifyFunction);

    name?: string;
    authenticate(
      this: StrategyCreated<this>,
      req: express.Request,
      options?: any
    ): any;
  }
}
