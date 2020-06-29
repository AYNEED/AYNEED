import { Resolvers } from 'src/__generated__';
import { UserModel } from 'src/models/user';
import { userDriver } from 'src/resolvers/drivers';

export const getUserById: Resolvers['Query']['user'] = async (
  parent,
  query
) => {
  const user = await UserModel.findById(query.id);

  if (!user) {
    return null;
  }

  return userDriver(user, {
    isOnline: false,
  });
};

export const getUsers: Resolvers['Query']['users'] = async () => {
  const users = await UserModel.find({}, null, { sort: { createdAt: 'desc' } });

  return users.map((user) =>
    userDriver(user, {
      isOnline: false,
    })
  );
};
