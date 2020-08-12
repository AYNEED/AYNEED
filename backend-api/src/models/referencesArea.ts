import { Schema, Document, model } from 'mongoose';

import { schemaOptions } from 'src/utils/mongodb';
import {
  ReferencesArea,
  ReferencesSpolers,
  UserLocale,
} from 'src/__generated__';

export type ReferencesSpolersRes = Document & ReferencesSpolers;
type ReferencesSpolersReq = Omit<ReferencesSpolersRes, 'createdAt'>;

export type ReferencesAreaRes = Document & ReferencesArea;
type ReferencesAreaReq = Omit<ReferencesAreaRes, 'createdAt'>;

const ReferencesSpolersSchema = new Schema<ReferencesSpolersReq>(
  {
    lang: {
      type: String,
      enum: Object.values(UserLocale),
      required: true,
      default: UserLocale.Rus,
    },
    icon: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: false,
    },
    content: {
      type: String,
      required: true,
    },
  },
  schemaOptions
);

const ReferencesAreaSchema = new Schema<ReferencesAreaReq>(
  {
    lang: {
      type: String,
      enum: Object.values(UserLocale),
      required: true,
      default: UserLocale.Rus,
    },
    content: {
      type: String,
      required: true,
    },
    spoilers: {
      type: Array,
      required: false,
      ref: 'ReferencesSpoilers',
      default: [],
    },
  },
  schemaOptions
);

export const ReferencesSpolersModel = model<
  ReferencesSpolersReq,
  ReferencesSpolersRes
>('ReferencesSpoilers', ReferencesSpolersSchema);

export const ReferencesAreaModel = model<ReferencesAreaReq, ReferencesAreaRes>(
  'ReferencesArea',
  ReferencesAreaSchema
);
