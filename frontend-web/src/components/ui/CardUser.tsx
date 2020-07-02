import React from 'react';

import { Avatar } from 'src/components/ui/Avatar';
import { CommouUserFieldsFragment } from 'src/__generated__';

type Props = CommouUserFieldsFragment;

const CardUser: React.FC<Props> = ({
  id,
  isOnline,
  about,
  personal,
}) => (
  <>
    <Avatar
      id={id}
      photo={personal.photo[0]}
      isOnline={isOnline}
      isCurrent={false}
      client="desktop"
      size="76px"
    />

    <h3>
      {personal.firstName} {personal.lastName}
    </h3>

    <ul>
      {about.skills.map(({ title, primary }) => (
        <li key={title}>{primary ? title : <strong>{title}</strong>}</li>
      ))}
    </ul>
  </>
);

export default CardUser;
