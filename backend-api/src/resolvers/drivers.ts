import { UserRes } from 'src/models/user';
import { User } from 'src/generated';

type UserDriverAdditional = {
  network: User['network'];
};

export const userDriver = (
  {
    id,
    about,
    personal,
    regional,
    contacts,
    statistics,
    role,
    createdAt,
  }: UserRes,
  additional: UserDriverAdditional
): User => ({
  id,
  about,
  personal,
  regional,
  contacts,
  statistics,
  role,
  createdAt,
  projects: [],
  subscriptions: [],
  subscribers: [],
  friends: [],
  ...additional,
});
