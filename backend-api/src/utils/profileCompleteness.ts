import { UserComplete } from 'src/models/user';

export const profileCompleteness = ({
  personal,
  regional,
  contacts,
}: UserComplete): number => {
  const requiredFields = [
    personal.firstName,
    personal.lastName,
    personal.bornAt,
    regional.country,
    regional.city,
    contacts.email,
    contacts.phone,
  ];

  const current = requiredFields.reduce<number>(
    (count, field) => (field ? count + 1 : count),
    0
  );

  return Math.round((current * 100) / requiredFields.length);
};
