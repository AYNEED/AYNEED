import { ProjectRes, ProjectModel } from 'src/models/project';
import { Project, ProjectStatus, MutationProjectAddArgs } from 'src/generated';
import { ValidationError } from 'shared';
import { WithSenderId } from 'src/types';

export const findProjectById = async (
  id: Project['id']
): Promise<ProjectRes> => {
  const project = await ProjectModel.findById(id);

  if (!project) {
    throw new ValidationError('error.project.notFound');
  }

  return project;
};

export const createProject = async ({
  senderId,
  title,
  problem,
  solution,
}: WithSenderId<MutationProjectAddArgs>): Promise<ProjectRes> =>
  ProjectModel.create({
    senderId,
    title,
    problem,
    solution,
    vacancies: [],
    likesCount: 0,
    status: ProjectStatus.Idea,
    commentsCount: 0,
    archivedAt: null,
  });
