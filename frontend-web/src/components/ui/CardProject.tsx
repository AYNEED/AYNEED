import React from 'react';

import { Msg } from 'src/i18n/Msg';
import { CommonProjectFieldsFragment } from 'src/generated';

type Props = CommonProjectFieldsFragment;

export const CardProject: React.FC<Props> = ({ title, problem, solution }) => (
  <>
    <h3>{title}</h3>

    <h4>
      <Msg id="web.components.ui.CardProject.problem" />
    </h4>
    <p>{problem}</p>

    <h4>
      <Msg id="web.components.ui.CardProject.solution" />
    </h4>
    <p>{solution}</p>
  </>
);
