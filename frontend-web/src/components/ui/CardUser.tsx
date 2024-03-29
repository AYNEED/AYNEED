import React from 'react';

import { Avatar } from 'src/components/ui/Avatar';
import { CommonUserFieldsFragment } from 'src/generated';

type Props = CommonUserFieldsFragment;

export const CardUser: React.FC<Props> = ({ id, network, about, personal }) => (
  <>
    <Avatar
      id={id}
      photo={personal.photo[0]}
      isOnline={network.isOnline}
      client={network.client}
      size="90px"
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
