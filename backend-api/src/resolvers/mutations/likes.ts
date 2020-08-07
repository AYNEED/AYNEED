import { Resolvers } from 'src/__generated__';
import { createLike } from 'src/helpers/likes';

export const addLike: Resolvers['Mutation']['addLike'] = async (
  parent,
  { owner, targetId, targetType, statement }
) => {
  const like = createLike({ owner, targetId, targetType, statement });

  return like;
};
