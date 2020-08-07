import { ProjectRes, ProjectModel } from 'src/models/project';
import { Project, MutationAddProjectArgs } from 'src/__generated__';
import { ValidationError } from 'shared';

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
  authorId,
  title,
  problem,
  solution,
}: MutationAddProjectArgs): Promise<ProjectRes> =>
  ProjectModel.create({
    authorId,
    title,
    problem,
    solution,
  });
