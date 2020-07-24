import { Resolvers } from 'src/__generated__';
import { getUserById, getUsers } from 'src/resolvers/queries/users';
import { getSearchResults } from 'src/resolvers/queries/search';

export const query: Resolvers['Query'] = {
  user: getUserById,
  users: getUsers,

  search: getSearchResults,
};
