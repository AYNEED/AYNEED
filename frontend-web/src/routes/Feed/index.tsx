import React from 'react';

import { Page } from 'src/components/wrappers/Page';
import { useGetUsersQuery } from 'src/__generated__';

const Feed: React.FC = () => {
  const { loading, error, data } = useGetUsersQuery();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error || !data) {
    return <p>Error</p>;
  }

  return (
    <Page title>
      {data.users.map(({ id, personal }) => (
        <p key={id}>
          {personal.firstName}: {personal.lastName}
        </p>
      ))}
    </Page>
  );
};

export default Feed;
