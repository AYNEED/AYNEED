import { Schema, model, Document } from 'mongoose';

import { schemaOptions } from 'src/utils/mongodb';
import { Project, ProjectStatus } from 'src/__generated__';

export type ProjectRes = Document & Project;
type ProjectReq = Omit<ProjectRes, 'createdAt' | 'subscribers' | 'comments'>;

const ProjectSchema = new Schema<ProjectReq>(
  {
    senderId: {
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
    status: {
      type: String,
      enum: Object.values(ProjectStatus),
      required: true,
    },
    commentCount: {
      type: Number,
      required: false,
      default: 0
    }
  },
  schemaOptions
);

export const ProjectModel = model<ProjectReq, ProjectRes>(
  'Project',
  ProjectSchema
);
