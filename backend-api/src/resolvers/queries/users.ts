import { Resolvers } from 'src/_generated';
import { users } from 'src/resolvers/mockData';

// TODO: use mongoDB (ch274)
export const getUserById: Resolvers['Query']['user'] = (parent, { id }) =>
  users.find((user) => user.id === id) || null;

export const getUsers: Resolvers['Query']['users'] = () => users;
