import { Resolvers } from 'src/__generated__';

export const getSearchResults: Resolvers['Query']['search'] = async (
  parent,
  query
) => {
  // TODO: add search
  return {
    items: [],
    hasMore: false,
  };
};
