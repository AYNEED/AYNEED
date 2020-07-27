import React, { useEffect, useCallback } from 'react';
import { useQuery } from '@apollo/react-hooks';

import {
  GetBeginningsDocument,
  GetBeginningsQuery,
  OnBeginningAddedDocument,
  OnBeginningAddedSubscription,
  OnBeginningUpdatedDocument,
  OnBeginningUpdatedSubscription,
} from 'src/__generated__';
import { Msg } from 'src/i18n/Msg';

const CardBeginning = React.lazy(() =>
  import('src/components/ui/CardBeginning')
);

export const FeedBeginnings: React.FC = () => {
  const { error, data, fetchMore, subscribeToMore } = useQuery<
    GetBeginningsQuery
  >(GetBeginningsDocument);

  useEffect(() => {
    subscribeToMore<OnBeginningAddedSubscription>({
      document: OnBeginningAddedDocument,
      updateQuery: (prev, { subscriptionData }) => ({
        ...prev,
        beginnings: {
          ...prev.beginnings,
          items: [
            subscriptionData.data.beginningAdded,
            ...prev.beginnings.items,
          ],
        },
      }),
    });

    subscribeToMore<OnBeginningUpdatedSubscription>({
      document: OnBeginningUpdatedDocument,
      updateQuery: (prev, { subscriptionData }) => ({
        ...prev,
        beginnings: {
          ...prev.beginnings,
          items: prev.beginnings.items.map((beginning) =>
            beginning.id === subscriptionData.data.beginningUpdated.id
              ? subscriptionData.data.beginningUpdated
              : beginning
          ),
        },
      }),
    });
  }, [subscribeToMore]);

  const loadMore = useCallback(() => {
    if (data && data.beginnings.hasMore) {
      const { items } = data.beginnings;

      fetchMore({
        query: GetBeginningsDocument,
        variables: { cursor: items[items.length - 1].id },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) {
            return prev;
          }

          return {
            ...prev,
            beginnings: {
              ...prev.beginnings,
              ...fetchMoreResult.beginnings,
              items: [
                ...prev.beginnings.items,
                ...fetchMoreResult.beginnings.items,
              ],
            },
          };
        },
      });
    }
  }, [fetchMore, data]);

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h2>
        <Msg id="web.routes.Feed.FeedBeginnings.title" />
      </h2>

      {error && <p>Error</p>}

      {data.beginnings.items.map((beginning) => (
        <div key={beginning.id}>
          <CardBeginning {...beginning} />

          <hr />
        </div>
      ))}

      {/* TODO: use auto-loading */}
      <div onClick={loadMore}>load mode</div>
    </>
  );
};
