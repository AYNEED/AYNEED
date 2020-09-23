import { Request, Response } from 'express';
import { User } from 'src/__generated__';

export type WithSenderId<T> = T & {
  senderId: User['id'];
};

export interface IApolloContext {
  req: Request;
  res: Response;
  user?: User;
}
