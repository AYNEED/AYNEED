import { Resolvers } from 'src/__generated__';
import { FEED_LIMIT } from '../../constants';
import { MessageModel } from 'src/models/message';

export const getMessages: Resolvers['Query']['messages'] = async (
  parent,
  query
) => {
  const data = await MessageModel.find(
    query.cursor ? { 'users.authorId': query.cursor } : {},
    null,
    { sort: { createdAt: 'desc' }, limit: FEED_LIMIT }
  );

  const last = data[data.length - 1];

  let count = 0;

  if (last) {
    count = await MessageModel.count({
      'users.authorId': last.id,
    });
  }

  return {
    items: data,
    hasMore: !!count,
  };
};
