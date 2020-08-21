import { Resolvers } from 'src/__generated__';
import { findHelpByLocale } from 'src/helpers/helps';

export const getHelp: Resolvers['Query']['help'] = async (parent, query) =>
  findHelpByLocale(query.locale);
