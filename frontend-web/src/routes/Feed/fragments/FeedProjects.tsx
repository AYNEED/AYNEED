import React, { useEffect, useCallback } from 'react';
import { useQuery } from '@apollo/client';

import {
  GetProjectsDocument,
  GetProjectsQuery,
  OnProjectAddedDocument,
  OnProjectAddedSubscription,
  OnProjectUpdatedDocument,
  OnProjectUpdatedSubscription,
} from 'src/__generated__';
import { Msg } from 'src/i18n/Msg';

const CardProject = React.lazy(() => import('src/components/ui/CardProject'));

export const FeedProjects: React.FC = () => {
  const { error, data, fetchMore, subscribeToMore } = useQuery<
    GetProjectsQuery
  >(GetProjectsDocument);

  useEffect(() => {
    subscribeToMore<OnProjectAddedSubscription>({
      document: OnProjectAddedDocument,
      updateQuery: (prev, { subscriptionData }) => ({
        ...prev,
        projects: {
          ...prev.projects,
          items: [subscriptionData.data.projectAdded, ...prev.projects.items],
        },
      }),
    });

    subscribeToMore<OnProjectUpdatedSubscription>({
      document: OnProjectUpdatedDocument,
      updateQuery: (prev, { subscriptionData }) => ({
        ...prev,
        projects: {
          ...prev.projects,
          items: prev.projects.items.map((project) =>
            project.id === subscriptionData.data.projectUpdated.id
              ? subscriptionData.data.projectUpdated
              : project
          ),
        },
      }),
    });
  }, [subscribeToMore]);

  const loadMore = useCallback(() => {
    if (data && data.projects.hasMore) {
      const { items } = data.projects;

      fetchMore({
        query: GetProjectsDocument,
        variables: { cursor: items[items.length - 1].id },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) {
            return prev;
          }

          return {
            ...prev,
            projects: {
              ...prev.projects,
              ...fetchMoreResult.projects,
              items: [
                ...prev.projects.items,
                ...fetchMoreResult.projects.items,
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
        <Msg id="web.routes.Feed.fragments.FeedProjects.title" />
      </h2>

      {error && <p>Error</p>}

      {data.projects.items.map((project) => (
        <div key={project.id}>
          <CardProject {...project} />

          <hr />
        </div>
      ))}

      {/* TODO: use auto-loading */}
      <div onClick={loadMore}>load more</div>
    </>
  );
};
