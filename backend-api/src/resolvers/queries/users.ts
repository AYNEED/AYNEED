import { Resolvers, UserClient } from 'src/generated';
import { UserModel } from 'src/models/user';
import { userDriver } from 'src/resolvers/drivers';
import { FEED_LIMIT } from 'src/constants';
import { findUserById } from 'src/helpers/users';

export const getUserById: Resolvers['Query']['user'] = async (
  parent,
  query
) => {
  const user = await findUserById(query.id);

  return userDriver(user, {
    network: { isOnline: false, client: UserClient.Desktop },
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
      userDriver(user, {
        network: { isOnline: false, client: UserClient.Desktop },
      })
    ),
    hasMore: !!count,
  };
};
