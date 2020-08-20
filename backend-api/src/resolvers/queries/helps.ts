import { Resolvers } from 'src/__generated__';
import { findHelpById, findHelpItemById } from 'src/helpers/helps';

export const getHelpById: Resolvers['Query']['help'] = async (
  parent,
  query
) => {
  const help = await findHelpById(query.id);

  return help;
};

export const getHelpItemById: Resolvers['Query']['helpItem'] = async (
  parent,
  query
) => {
  const helpItem = await findHelpItemById(query.id);

  return helpItem;
};
