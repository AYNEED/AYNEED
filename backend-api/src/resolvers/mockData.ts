import { User, Gender } from 'src/_generated';

// TODO: use mongoDB (ch274)
export const users: User[] = [
  {
    id: 'user1',
    isOnline: false,
    personal: {
      login: 'user1',
      firstName: 'First',
      lastName: 'User',
      gender: Gender.Male,
    },
  },
  {
    id: 'user2',
    isOnline: false,
    personal: {
      login: 'user2',
      firstName: 'Second',
      lastName: 'User',
      gender: null,
    },
  },
];
