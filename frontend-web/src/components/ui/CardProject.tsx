import React from 'react';

import { Msg } from 'src/i18n/Msg';
import { CommouProjectFieldsFragment } from 'src/__generated__';

type Props = CommouProjectFieldsFragment;

const CardProject: React.FC<Props> = ({ title, problem, solution }) => (
  <>
    <h3>{title}</h3>

    <h4>
      <Msg id="web.routes.Feed.FeedProjects.problem" />
    </h4>
    <p>{problem}</p>

    <h4>
      <Msg id="web.routes.Feed.FeedProjects.solution" />
    </h4>
    <p>{solution}</p>
  </>
);

export default CardProject;
