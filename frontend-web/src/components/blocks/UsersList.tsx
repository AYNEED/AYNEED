import React, { useRef, useEffect } from 'react';
import Bound from 'bounds.js';

import { VirtualizedLoader } from 'src/utils/bounds';
import { CommonUserFieldsFragment } from 'src/__generated__';

const CardUser = React.lazy(() => import('src/components/ui/CardUser'));

type Props = {
  data: CommonUserFieldsFragment[];
  callback: () => void;
};

export const UsersList: React.FC<Props> = ({ data, callback }) => {
  const activateRef = useRef(null);

  useEffect(() => {
    const boundary = Bound();

    boundary.watch(activateRef.current, (ratio: any) => {
      if (ratio !== null) {
        callback();
      }
    });

    return () => {
      boundary.clear();
    };
  }, [data]);

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {data.map((user, index, arr) => (
        <div
          key={user.id}
          ref={arr.length - 1 === index ? activateRef : undefined}
        >
          <VirtualizedLoader
            height={100}
            children={<UsersListItem user={user} />}
          />
        </div>
      ))}
    </>
  );
};

export const UsersListItem: React.FC<{ user: CommonUserFieldsFragment }> = ({
  user,
}) => (
  <div>
    <CardUser {...user} />
  </div>
);
