import { User } from 'src/generated';

declare module 'express' {
  export interface Request {
    user?: {
      id: User['id'];
    };
  }
}
