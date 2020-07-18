import { UserComplete } from 'src/models/user';

export const profileCompleteness = ({
  personal,
  regional,
  contacts,
}: UserComplete): number => {
  const total = 4;
  let current = 0;

  if (personal.bornAt) {
    current++;
  }

  if (regional.country) {
    current++;
  }

  if (regional.city) {
    current++;
  }

  if (contacts.phone) {
    current++;
  }

  return (current * 100) / total;
};
