import { Client, Resolvers, SearchMode } from 'src/__generated__';
import { UserModel } from '../../models/user';
import { SEARCH_LIMIT } from '../../constants';
import { userDriver } from '../drivers';

export const getSearchResults: Resolvers['Query']['search'] = async (
  parent,
  query
) => {
  let count = 0;
  let items: any;

  switch (query.mode) {
    case SearchMode.Users:
      const data = await UserModel.find(
        { 'personal.firstName': { $regex: '^' + query.query + '.*' } },
        null,
        { sort: { createdAt: 'desc' }, limit: SEARCH_LIMIT }
      );

      const last = data[data.length - 1];

      if (last) {
        count = await UserModel.count({
          'personal.firstName': { $regex: '^' + query.query + '.*' },
        });
      }
      items = data.map((user) =>
        userDriver(user, {
          network: { isOnline: false, client: Client.Desktop },
        })
      );

      break;

    case SearchMode.Candidates:
      break;

    case SearchMode.Concepts:
      break;

    case SearchMode.Ideas:
      break;

    case SearchMode.Mvps:
      break;
  }

  return {
    items: items,
    hasMore: !!count,
  };
};
