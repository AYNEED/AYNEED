import { Schema, model } from 'mongoose';

import { schemaOptions } from 'src/utils/mongodb';

const BeginningSchema = new Schema(
  {
    author: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    theProblem: {
      type: String,
      required: true,
    },
    theSolution: {
      type: String,
      required: true,
    },
  },
  schemaOptions
);

export const BeginningModel = model('Beginning', BeginningSchema);
