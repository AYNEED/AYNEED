import { Resolvers, Client } from 'src/__generated__';
import { UserModel } from 'src/models/user';
import { userDriver } from 'src/resolvers/drivers';
import { FEED_LIMIT } from 'src/constants';

export const getUserById: Resolvers['Query']['user'] = async (
  parent,
  query
) => {
  const user = await UserModel.findById(query.id);

  if (!user) {
    return null;
  }

  return userDriver(user, {
    network: { isOnline: false, client: Client.Desktop },
  });
};

export const getUsers: Resolvers['Query']['users'] = async (parent, query) => {
  const data = await UserModel.find(
    query.cursor ? { _id: { $lt: query.cursor } } : {},
    null,
    { sort: { createdAt: 'desc' }, limit: FEED_LIMIT }
  );

  const last = data[data.length - 1];

  let count = 0;

  if (last) {
    count = await UserModel.count({
      _id: { $lt: last.id },
    });
  }

  return {
    items: data.map((user) =>
      userDriver(user, { network: { isOnline: false, client: Client.Desktop } })
    ),
    hasMore: !!count,
  };
};
