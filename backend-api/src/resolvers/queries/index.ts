import { Resolvers } from 'src/__generated__';
import {
  getBeginningById,
  getBeginnings,
} from 'src/resolvers/queries/beginnings';
import { getLikeById } from 'src/resolvers/queries/likes';
import { getUserById, getUsers } from 'src/resolvers/queries/users';
import { getSearchResults } from 'src/resolvers/queries/search';
import { getMessages } from './messages';

export const query: Resolvers['Query'] = {
  beginning: getBeginningById,
  beginnings: getBeginnings,

  user: getUserById,
  users: getUsers,

  search: getSearchResults,

  messages: getMessages,

  like: getLikeById,
};
