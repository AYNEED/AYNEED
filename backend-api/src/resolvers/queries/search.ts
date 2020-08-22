import {
  UserClient,
  Resolvers,
  SearchTargetModel,
  UserFeed,
  QuerySearchArgs,
} from 'src/__generated__';
import { UserModel } from 'src/models/user';
import { FEED_LIMIT } from 'src/constants';
import { userDriver } from 'src/resolvers/drivers';

const searchModeToHandler: {
  [key in SearchTargetModel]: (query: QuerySearchArgs) => Promise<UserFeed>;
} = {
  [SearchTargetModel.Users]: async ({ query, cursor }) => {
    const data = await UserModel.find(
      {
        $and: [
          cursor ? { _id: { $lt: cursor } } : {},
          { 'personal.firstName': { $regex: '^' + query + '.*' } },
        ],
      },
      null,
      { sort: { createdAt: 'desc' }, limit: FEED_LIMIT }
    );

    const last = data[data.length - 1];

    let count = 0;

    if (last) {
      count = await UserModel.count({
        $and: [
          { _id: { $lt: last.id } },
          { 'personal.firstName': { $regex: '^' + query + '.*' } },
        ],
      });
    }

    return {
      items: data.map((user) =>
        userDriver(user, {
          network: { isOnline: false, client: UserClient.Desktop },
        })
      ),
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
  { query, targetModel, cursor }
) =>
  searchModeToHandler[targetModel]({
    query,
    targetModel,
    cursor: cursor || null,
  });
