import { Resolvers } from 'src/__generated__';
import { ValidationError } from 'shared';
import { createLike } from 'src/helpers/likes';
import { findUserById } from 'src/helpers/users';
import { LikeModel } from 'src/models/like';
import { ProjectModel } from 'src/models/project';

export const likeAdd: Resolvers['Mutation']['likeAdd'] = async (
  parent,
  { targetId, targetModel, status },
  { user }
) => {
  if (!user) {
    throw new ValidationError('error.user.notFound');
  }

  if (user.id === targetId) {
    throw new ValidationError('error.like.myself');
  }

  const check = await LikeModel.exists({
    senderId: user.id,
    targetId: targetId,
  });
  if (check) {
    throw new ValidationError('error.like.exists');
  }

  const target = await findUserById(targetId);

  if (
    user.statistics.completeness !== 100 &&
    target.statistics.completeness !== 100
  ) {
    throw new ValidationError('error.user.incompleteProfile');
  }
  await ProjectModel.findByIdAndUpdate(
    { _id: targetId },
    { $inc: { countLike: 1 } }
  );

  return createLike({ senderId: user.id, targetId, targetModel, status });
};

export const likeRemove: Resolvers['Mutation']['likeRemove'] = async (
  parent,
  { id }
) => {
  // TODO: remove like from db
  return true;
};
