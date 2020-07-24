import { Schema, model } from 'mongoose';

import { schemaOptions } from 'src/utils/mongodb';

const BeginningSchema = new Schema(
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

export const BeginningModel = model('Beginning', BeginningSchema);
