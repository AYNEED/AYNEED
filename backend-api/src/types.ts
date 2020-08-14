import { User } from 'src/__generated__';

export type WithSenderId<T> = T & {
  senderId: User['id'];
};
