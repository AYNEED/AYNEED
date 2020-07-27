import { Schema, model, Document } from 'mongoose';

import { schemaOptions } from 'src/utils/mongodb';
import { Beginning } from 'src/__generated__';

export type BeginningRes = Document & Beginning;
type BeginningReq = Omit<BeginningRes, 'createdAt'>;

const BeginningSchema = new Schema<BeginningReq>(
  {
    authorId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    problem: {
      type: String,
      required: true,
    },
    solution: {
      type: String,
      required: true,
    },
  },
  schemaOptions
);

export const BeginningModel = model<BeginningReq, BeginningRes>(
  'Beginning',
  BeginningSchema
);
