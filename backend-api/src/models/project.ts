import { Schema, model, Document } from 'mongoose';

import { schemaOptions } from 'src/utils/mongodb';
import { Project } from 'src/__generated__';

export type ProjectRes = Document & Project;
type ProjectReq = Omit<ProjectRes, 'createdAt' | 'subscriptions'>;

const ProjectSchema = new Schema<ProjectReq>(
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

export const ProjectModel = model<ProjectReq, ProjectRes>(
  'Project',
  ProjectSchema
);
