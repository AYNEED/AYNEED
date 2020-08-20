import { Resolvers } from 'src/__generated__';
import { createHelp, createHelpItem } from 'src/helpers/helps';

export const helpAdd: Resolvers['Mutation']['helpAdd'] = async (
  parent,
  { locale, text }
) => await createHelp({ locale, text });

export const helpItemAdd: Resolvers['Mutation']['helpItemAdd'] = async (
  parent,
  { order, locale, icon, title, text }
) => await createHelpItem({ order, locale, icon, title, text });
