import { LikeModel, LikeRes } from 'src/models/like';
import { MutationLikeAddArgs } from 'src/__generated__';
import { TokenToSenderId } from 'src/types';

export const createLike = async ({
  senderId,
  targetId,
  targetModel,
  status,
}: TokenToSenderId<MutationLikeAddArgs>): Promise<LikeRes> =>
  LikeModel.create({
    senderId,
    targetId,
    targetModel,
    status,
  });
