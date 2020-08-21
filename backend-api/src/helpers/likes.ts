import { LikeModel, LikeRes } from 'src/models/like';
import { MutationLikeAddArgs } from 'src/__generated__';
import { WithSenderId } from 'src/types';

export const createLike = async ({
  senderId,
  targetId,
  targetModel,
  status,
}: WithSenderId<MutationLikeAddArgs>): Promise<LikeRes> =>
  LikeModel.create({
    senderId,
    targetId,
    targetModel,
    status,
  });

export const updateLike = async ({
  id,
  status,
}: LikeRes['id' | 'status']): Promise<LikeRes | null> =>
  LikeModel.findByIdAndUpdate({ _id: id }, { status: status });

export const deleteLike = async ({
  id,
}: LikeRes['id']): Promise<LikeRes | null> =>
  LikeModel.findByIdAndDelete({ _id: id });
