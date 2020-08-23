import React from 'react';

import { SearchForm } from 'src/components/blocks/SearchForm';
import { Page } from 'src/components/wrappers/Page';
import { FeedProjects } from 'src/routes/Feed/fragments/FeedProjects';
import { FeedUsers } from 'src/routes/Feed/fragments/FeedUsers';

const Feed: React.FC = () => (
  <Page>
    <SearchForm mode="general" onSubmit={console.log} withChangeHistory />

    <FeedProjects />
    <FeedUsers />
  </Page>
);

export default Feed;
