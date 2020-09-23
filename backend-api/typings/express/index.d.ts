import { User } from 'src/__generated__';

declare module 'express' {
  export interface Request {
    user?: {
      id: User['id'];
    };
  }
}
