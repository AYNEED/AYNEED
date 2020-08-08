import { User } from 'src/__generated__';

export type TokenToSenderId<T> = Omit<T, 'token'> & {
  senderId: User['id'];
};
