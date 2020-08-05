import { Client, Resolvers, SearchMode, UserFeed } from 'src/__generated__';
import { UserModel } from 'src/models/user';
import { SEARCH_LIMIT } from 'src/constants';
import { userDriver } from 'src/resolvers/drivers';

export const getSearchResults: Resolvers['Query']['search'] = async (
  parent,
  query
) => {
  const count = 0;
  let items: any;

  return await searchModeToHandler[query.mode](query.query, count, items);
};

const searchModeToHandler: {
  [key in SearchMode]: (...args: any) => Promise<UserFeed>;
} = {
  [SearchMode.Users]: async (query: string, count: number, items: any) => {
    const data = await UserModel.find(
      { 'personal.firstName': { $regex: '^' + query + '.*' } },
      null,
      { sort: { createdAt: 'desc' }, limit: SEARCH_LIMIT }
    );

    const last = data[data.length - 1];

    if (last) {
      count = await UserModel.count({
        'personal.firstName': { $regex: '^' + query + '.*' },
      });
    }

    items = data.map((user) =>
      userDriver(user, {
        network: { isOnline: false, client: Client.Desktop },
      })
    );

    return {
      items: items,
      hasMore: !!count,
    };
  },

  [SearchMode.Candidates]: async () => ({ items: [], hasMore: false }),

  [SearchMode.Concepts]: async () => ({ items: [], hasMore: false }),

  [SearchMode.Ideas]: async () => ({ items: [], hasMore: false }),

  [SearchMode.Mvps]: async () => ({ items: [], hasMore: false }),
};
