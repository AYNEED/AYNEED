import { Request, Response } from 'express';
import { User } from 'src/__generated__';

export type WithSenderId<T> = T & {
  senderId: User['id'];
};

export interface IContext {
  req: Request;
  res: Response;
  user?: User;
}
