import { LikeModel, LikeRes } from 'src/models/like';
import { Like, MutationAddLikeArgs } from 'src/__generated__';
import { ValidationError } from 'shared';

export const findLikeById = async (id: Like['id']): Promise<LikeRes> => {
  const like = await LikeModel.findById(id);

  if (!like) {
    throw new ValidationError('error.like.notFound');
  }

  return like;
};

export const createLike = async ({
  senderId,
  targetId,
  targetType,
  statement,
}: MutationAddLikeArgs): Promise<LikeRes> =>
  LikeModel.create({
    senderId,
    targetId,
    targetType,
    statement,
  });
