import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import { Page } from 'src/components/wrappers/Page';
import { GetUsersQuery } from 'src/__generated__';

const GET_USERS = gql`
  query GetUsers {
    users {
      id
      isOnline
      personal {
        login
        firstName
        lastName
        gender
      }
    }
  }
`;

const Feed: React.FC = () => {
  const { loading, error, data } = useQuery<GetUsersQuery>(GET_USERS);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error || !data) {
    return <p>Error</p>;
  }

  console.log(data);

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
