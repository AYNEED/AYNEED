/* eslint-disable @typescript-eslint/no-explicit-any */
import { UModel, Document } from 'mongoose';

import { Resolvers, LikeTargetModel, LikeStatus } from 'src/generated';
import { ValidationError } from 'shared';
import { createLike, deleteLike, updateLike } from 'src/helpers/likes';
import { LikeModel } from 'src/models/like';
import { ProjectModel } from 'src/models/project';
import { CommentModel } from 'src/models/comment';
import { findProjectById } from 'src/helpers/projects';
import { findCommentById } from 'src/helpers/comments';

const targetModelToHelper: {
  [key in LikeTargetModel]: {
    helper: (targetId: string) => Promise<any>;
    model: UModel<
      any,
      Document & { likesCount: number; dislikesCount?: number }
    >;
  };
} = {
  [LikeTargetModel.Comment]: {
    helper: findCommentById,
    model: CommentModel,
  },
  [LikeTargetModel.Project]: {
    helper: findProjectById,
    model: ProjectModel,
  },
};

export const likeAdd: Resolvers['Mutation']['likeAdd'] = async (
  parent,
  { targetId, targetModel, status },
  { user }
) => {
  if (!user) {
    throw new ValidationError('error.user.notFound');
  }

  if (
    targetModel !== LikeTargetModel.Comment &&
    status === LikeStatus.Dislike
  ) {
    throw new ValidationError('error.like.dislikeNotSupported');
  }

  if (user.statistics.completeness !== 100) {
    throw new ValidationError('error.user.incompleteProfile');
  }

  const targetHelper = targetModelToHelper[targetModel];
  const target = await targetHelper.helper(targetId);

  if (!target) {
    throw new ValidationError('error.like.targetNotExists');
  }

  const like = await LikeModel.findOne({
    senderId: user.id,
    targetId,
    targetModel,
  });

  if (like && like.status === status) {
    throw new ValidationError('error.like.exists');
  }

  const condition = status === LikeStatus.Like;
  const field = condition ? 'likesCount' : 'dislikesCount';

  await targetHelper.model.findByIdAndUpdate(
    { _id: targetId },
    {
      $inc: like
        ? {
            likesCount: condition ? 1 : -1,
            dislikesCount: condition ? -1 : 1,
          }
        : { [field]: 1 },
    }
  );

  const result = await (like
    ? updateLike({ id: like.id, status })
    : createLike({ senderId: user.id, targetId, targetModel, status }));

  if (!result) {
    throw new ValidationError('error.like.targetNotExists');
  }

  return result;
};

export const likeRemove: Resolvers['Mutation']['likeRemove'] = async (
  parent,
  { id }
) => {
  const like = await LikeModel.findById({ _id: id });

  if (!like) {
    throw new ValidationError('error.like.likeNotExists');
  }

  const targetHelper = targetModelToHelper[like.targetModel];
  const field =
    like.status === LikeStatus.Dislike ? 'dislikesCount' : 'likesCount';

  await targetHelper.model.findByIdAndUpdate(
    { _id: like.targetId },
    { $inc: { [field]: -1 } }
  );

  await deleteLike({ id });

  return true;
};
