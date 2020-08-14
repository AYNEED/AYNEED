import { Schema, Document, model } from 'mongoose';

import { schemaOptions } from 'src/utils/mongodb';
import { ReferencesArea, UserLocale } from 'src/__generated__';

export type ReferencesAreaRes = Document & ReferencesArea;
type ReferencesAreaReq = Omit<ReferencesAreaRes, 'createdAt'>;

const ReferencesAreaSchema = new Schema<ReferencesAreaReq>(
  {
    locale: {
      type: String,
      enum: Object.values(UserLocale),
      required: true,
      default: UserLocale.Rus,
    },
    order: {
      type: Number,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  schemaOptions
);

export const ReferencesAreaModel = model<ReferencesAreaReq, ReferencesAreaRes>(
  'ReferencesArea',
  ReferencesAreaSchema
);
