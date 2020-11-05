import { Resolvers } from 'src/generated';
import { getProjectById, getProjects } from 'src/resolvers/queries/projects';
import { getUserById, getUsers } from 'src/resolvers/queries/users';
import { getHelp } from 'src/resolvers/queries/helps';
import { getSearchResults } from 'src/resolvers/queries/search';
import { getMessages } from './messages';

export const query: Resolvers['Query'] = {
  project: getProjectById,
  projects: getProjects,

  user: getUserById,
  users: getUsers,

  search: getSearchResults,

  messages: getMessages,

  help: getHelp,
};
