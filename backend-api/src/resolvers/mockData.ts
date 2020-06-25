import { User } from 'src/__generated__';

// TODO: use mongoDB (ch274)
export const users: User[] = [
  {
    id: 'user1',
    isOnline: false,
    personal: {
      firstName: 'First',
      lastName: 'User',
    },
  },
  {
    id: 'user2',
    isOnline: false,
    personal: {
      firstName: 'Second',
      lastName: 'User',
    },
  },
];
