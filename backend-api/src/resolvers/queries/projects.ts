import { Resolvers } from 'src/generated';
import { ProjectModel } from 'src/models/project';
import { FEED_LIMIT } from 'src/constants';
import { findProjectById } from 'src/helpers/projects';

export const getProjectById: Resolvers['Query']['project'] = async (
  parent,
  query
) => findProjectById(query.id);

export const getProjects: Resolvers['Query']['projects'] = async (
  parent,
  query
) => {
  const items = await ProjectModel.find(
    query.cursor ? { _id: { $lt: query.cursor } } : {},
    null,
    { sort: { createdAt: 'desc' }, limit: FEED_LIMIT }
  );

  const last = items[items.length - 1];

  let count = 0;

  if (last) {
    count = await ProjectModel.count({
      _id: { $lt: last.id },
    });
  }

  return {
    items,
    hasMore: !!count,
  };
};
