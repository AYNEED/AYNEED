import { Client, Resolvers, SearchMode, UserFeed } from 'src/__generated__';
import { UserModel } from 'src/models/user';
import { SEARCH_LIMIT } from 'src/constants';
import { userDriver } from 'src/resolvers/drivers';

export const getSearchResults: Resolvers['Query']['search'] = async (
  parent,
  query
) => {
  let count = 0;
  let items: any;

  const searchModeToHandler: {
    [key in SearchMode]: () => Promise<UserFeed>;
  } = {
    [SearchMode.Users]: async () => {
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

  return await searchModeToHandler[query.mode]();
};
