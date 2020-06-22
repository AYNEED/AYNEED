import { Resolvers } from 'src/__generated__';
import { getUserById, getUsers } from 'src/resolvers/queries/users';

export const query: Resolvers['Query'] = {
  user: getUserById,
  users: getUsers,
};
