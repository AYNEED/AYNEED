import { Schema, Document, model } from 'mongoose';

import { schemaOptions } from 'src/utils/mongodb';
import { Help, HelpItem, UserLocale } from 'src/__generated__';

export type HelpItemRes = Document & HelpItem;
type HelpItemReq = Omit<HelpItemRes, 'createdAt'>;

export type HelpRes = Document & Help;
type HelpReq = Omit<HelpRes, 'createdAt' | 'items'>;

const HelpItemSchema = new Schema<HelpItemReq>(
  {
    order: {
      type: Number,
      required: true,
    },
    locale: {
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
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  schemaOptions
);

const HelpSchema = new Schema<HelpReq>(
  {
    locale: {
      type: String,
      enum: Object.values(UserLocale),
      required: true,
      default: UserLocale.Rus,
    },
    text: {
      type: String,
      required: true,
    },
  },
  schemaOptions
);

export const HelpItemModel = model<HelpItemReq, HelpItemRes>(
  'HelpItem',
  HelpItemSchema
);

export const HelpsModel = model<HelpReq, HelpRes>('Help', HelpSchema);
