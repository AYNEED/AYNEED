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
    createdAt: '2020-06-25T20:09:48.323+00:00',
  },
  {
    id: 'user2',
    isOnline: false,
    personal: {
      firstName: 'Second',
      lastName: 'User',
    },
    createdAt: '2020-06-25T20:09:48.323+00:00',
  },
];
