import { Schema, model, Document } from 'mongoose';

import { schemaOptions } from 'src/utils/mongodb';
import { Project, ProjectStatus, Vacancy } from 'src/__generated__';

export type ProjectRes = Document & Project;
type ProjectReq = Omit<ProjectRes, 'createdAt' | 'subscribers' | 'comments'>;

const VacancySchema = new Schema<Vacancy>({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  archivedAt: {
    type: Date,
  },
});

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
    likesCount: {
      type: Number,
      required: true,
      default: 0,
    },
    commentsCount: {
      type: Number,
      required: false,
      default: 0,
    },
    status: {
      type: String,
      enum: Object.values(ProjectStatus),
      required: true,
    },
    archivedAt: {
      type: Date,
    },
    vacancies: {
      type: [VacancySchema],
      required: true,
    },
  },
  schemaOptions
);

export const ProjectModel = model<ProjectReq, ProjectRes>(
  'Project',
  ProjectSchema
);
