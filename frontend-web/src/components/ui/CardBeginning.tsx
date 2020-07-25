import React from 'react';

import { Msg } from 'src/i18n/Msg';
import { CommouBeginningFieldsFragment } from 'src/__generated__';

type Props = CommouBeginningFieldsFragment;

const CardBeginning: React.FC<Props> = ({ title, problem, solution }) => (
  <>
    <h3>{title}</h3>

    <h4>
      <Msg id="web.routes.Feed.FeedBeginnings.problem" />
    </h4>
    <p>{problem}</p>

    <h4>
      <Msg id="web.routes.Feed.FeedBeginnings.solution" />
    </h4>
    <p>{solution}</p>
  </>
);

export default CardBeginning;
