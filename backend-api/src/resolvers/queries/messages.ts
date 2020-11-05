import { Resolvers } from 'src/generated';
import { FEED_LIMIT } from 'src/constants';
import { MessageModel } from 'src/models/message';

export const getMessages: Resolvers['Query']['messages'] = async (
  parent,
  query
) => {
  const data = await MessageModel.find(
    query.cursor ? { 'users.senderId': query.cursor } : {},
    null,
    { sort: { createdAt: 'desc' }, limit: FEED_LIMIT }
  );

  const last = data[data.length - 1];

  let count = 0;

  if (last) {
    count = await MessageModel.count({
      'users.senderId': last.id,
    });
  }

  return {
    items: data,
    hasMore: !!count,
  };
};
