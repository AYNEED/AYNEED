/* eslint-disable @typescript-eslint/no-explicit-any */
import { UModel, Document } from 'mongoose';

import { Resolvers, CommentTargetModel } from 'src/generated';
import { createComment } from 'src/helpers/comments';
import { ValidationError } from 'shared';
import { ProjectModel } from 'src/models/project';
import { CommentModel } from 'src/models/comment';
import { findProjectById } from 'src/helpers/projects';

const targetModelToHelper: {
  [key in CommentTargetModel]: {
    helper: (targetId: string) => Promise<any>;
    model: UModel<
      any,
      Document & { likesCount: number; dislikesCount?: number }
    >;
  };
} = {
  [CommentTargetModel.Project]: {
    helper: findProjectById,
    model: ProjectModel,
  },
};

export const commentAdd: Resolvers['Mutation']['commentAdd'] = async (
  parent,
  { parentId, targetId, targetModel, text },
  { user }
) => {
  if (!user) {
    throw new ValidationError('error.user.notFound');
  }

  if (user.statistics.completeness !== 100) {
    throw new ValidationError('error.user.incompleteProfile');
  }

  const targetHelper = targetModelToHelper[targetModel];
  const target = await targetHelper.helper(targetId);

  if (!target) {
    throw new ValidationError('error.comment.targetNotExists');
  }

  if (parentId) {
    const parentComment = await CommentModel.findByIdAndUpdate(
      { _id: parentId },
      { $inc: { commentsCount: 1 } }
    );

    if (!parentComment) {
      parentId = null;
    }
  }

  await targetHelper.model.findByIdAndUpdate(
    { _id: targetId },
    { $inc: { commentsCount: 1 } }
  );

  return createComment({
    senderId: user.id,
    parentId: parentId || null,
    targetId,
    targetModel,
    text,
  });
};

export const commentRemove: Resolvers['Mutation']['commentRemove'] = async (
  parent,
  { id }
) => {
  // TODO: remove comment from db
  return true;
};
