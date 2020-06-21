import { Resolvers } from 'src/_generated';
import { getUserById, getUsers } from 'src/resolvers/queries/users';

export const query: Resolvers['Query'] = {
  user: getUserById,
  users: getUsers,
};
