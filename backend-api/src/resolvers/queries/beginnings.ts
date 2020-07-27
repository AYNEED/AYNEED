import { Resolvers } from 'src/__generated__';
import { BeginningModel } from 'src/models/beginning';
import { FEED_LIMIT } from 'src/constants';
import { findBeginningById } from 'src/helpers/beginnings';

export const getBeginningById: Resolvers['Query']['beginning'] = async (
  parent,
  query
) => findBeginningById(query.id);

export const getBeginnings: Resolvers['Query']['beginnings'] = async (
  parent,
  query
) => {
  const items = await BeginningModel.find(
    query.cursor ? { _id: { $lt: query.cursor } } : {},
    null,
    { sort: { createdAt: 'desc' }, limit: FEED_LIMIT }
  );

  const last = items[items.length - 1];

  let count = 0;

  if (last) {
    count = await BeginningModel.count({
      _id: { $lt: last.id },
    });
  }

  return {
    items,
    hasMore: !!count,
  };
};
