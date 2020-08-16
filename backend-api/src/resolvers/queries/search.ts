import {
  UserClient,
  Resolvers,
  SearchTargetModel,
  UserFeed,
  QuerySearchArgs,
} from 'src/__generated__';
import { UserModel } from 'src/models/user';
import { SEARCH_LIMIT } from 'src/constants';
import { userDriver } from 'src/resolvers/drivers';

const searchModeToHandler: {
  [key in SearchTargetModel]: (query: QuerySearchArgs) => Promise<UserFeed>;
} = {
  [SearchTargetModel.Users]: async (query) => {
    let count = 0;

    const data = await UserModel.find(
      {
        $and: [
          query.cursor ? { _id: { $lt: query.cursor } } : {},
          { 'personal.firstName': { $regex: '^' + query.query + '.*' } },
        ],
      },
      null,
      { sort: { createdAt: 'desc' }, limit: SEARCH_LIMIT }
    );

    const last = data[data.length - 1];

    if (last) {
      count = await UserModel.count({
        $and: [
          { _id: { $lt: last.id } },
          { 'personal.firstName': { $regex: '^' + query.query + '.*' } },
        ],
      });
    }

    const items = data.map((user) =>
      userDriver(user, {
        network: { isOnline: false, client: UserClient.Desktop },
      })
    );

    return {
      items: items,
      hasMore: !!count,
    };
  },

  [SearchTargetModel.Candidates]: async () => ({ items: [], hasMore: false }),

  [SearchTargetModel.Concepts]: async () => ({ items: [], hasMore: false }),

  [SearchTargetModel.Ideas]: async () => ({ items: [], hasMore: false }),

  [SearchTargetModel.Mvps]: async () => ({ items: [], hasMore: false }),
};

export const getSearchResults: Resolvers['Query']['search'] = async (
  parent,
  query
) => {
  return await searchModeToHandler[query.targetModel](query);
};
