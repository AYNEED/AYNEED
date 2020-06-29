import { UserRes } from 'src/models/user';
import { User } from 'src/__generated__';

type UserDriverAdditional = {
  isOnline: User['isOnline'];
};

export const userDriver = (
  { id, about, personal, regional, contacts, statistics, createdAt }: UserRes,
  additional: UserDriverAdditional
): User => ({
  id,
  about,
  personal,
  regional,
  contacts,
  statistics,
  createdAt,
  ...additional,
});
