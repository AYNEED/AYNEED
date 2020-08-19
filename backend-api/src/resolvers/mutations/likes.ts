import { Resolvers, LikeTargetModel } from 'src/__generated__';
import { ValidationError } from 'shared';
import { createLike, deleteLike } from 'src/helpers/likes';
import { LikeModel } from 'src/models/like';
import { ProjectModel } from 'src/models/project';
import { findProjectById } from 'src/helpers/projects';

const targetModelToHelper: {
  [key in LikeTargetModel]: (targetId: string) => any;
} = {
  [LikeTargetModel.Project]: findProjectById,
};

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

  if (user.statistics.completeness !== 100) {
    throw new ValidationError('error.user.incompleteProfile');
  }

  const target = await targetModelToHelper[targetModel](targetId);

  if (!target) {
    throw new ValidationError('error.like.targetNotExists');
  }

  const check = await LikeModel.exists({
    senderId: user.id,
    targetId,
    targetModel,
  });

  if (check) {
    throw new ValidationError('error.like.exists');
  }

  await ProjectModel.findByIdAndUpdate(
    { _id: targetId },
    { $inc: { likesCount: 1 } }
  );

  return createLike({ senderId: user.id, targetId, targetModel, status });
};

export const likeRemove: Resolvers['Mutation']['likeRemove'] = async (
  parent,
  { id }
) => {
  const like = await LikeModel.findById({ _id: id });

  if (!like) {
    throw new ValidationError('error.like.likeNotExists');
  }

  await ProjectModel.findByIdAndUpdate(
    { _id: like.targetId },
    { $inc: { likesCount: -1 } }
  );

  await deleteLike({ id });

  return true;
};
