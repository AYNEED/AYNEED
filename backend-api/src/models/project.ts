import { Schema, model, Document } from 'mongoose';

import { schemaOptions } from 'src/utils/mongodb';
import { Project, ProjectStatus } from 'src/__generated__';

export type ProjectRes = Document & Project;
type ProjectReq = Omit<ProjectRes, 'createdAt' | 'subscribers'>;

const ProjectSchema = new Schema<ProjectReq>({
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
  countLike: {
    type: Number,
    required: true,
    default: 0,
    status: {
      type: String,
      enum: Object.values(ProjectStatus),
      required: true,
    },
  },
  schemaOptions,
});

export const ProjectModel = model<ProjectReq, ProjectRes>(
  'Project',
  ProjectSchema
);
