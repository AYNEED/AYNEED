import { Resolvers } from 'src/__generated__';
import { getProjectById, getProjects } from 'src/resolvers/queries/projects';
import { getUserById, getUsers } from 'src/resolvers/queries/users';
import { getReferenceById } from 'src/resolvers/queries/references';
import { getSearchResults } from 'src/resolvers/queries/search';
import { getMessages } from './messages';

export const query: Resolvers['Query'] = {
  project: getProjectById,
  projects: getProjects,

  user: getUserById,
  users: getUsers,

  search: getSearchResults,

  messages: getMessages,

  reference: getReferenceById,
};
