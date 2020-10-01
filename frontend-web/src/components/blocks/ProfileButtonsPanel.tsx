import React from 'react';
import { FelaComponent } from 'react-fela';

import { Styles } from 'src/utils/fela';

import { Button } from 'src/components/ui/forms/Button';
import { Message } from 'src/components/icons/interactions/Message';
import { PeoplePlus } from 'src/components/icons/interactions/PeoplePlus';
import { Share } from 'src/components/icons/interactions/Share';
import { Various } from 'src/components/icons/interactions/Various';

const styles: Styles<'container'> = {
  container: {
    width: 162,
    height: 24,
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
};

export const ProfileButtonsPanel: React.FC = () => {
  //TODO: handle click on buttons
  return (
    <>
      <FelaComponent style={styles.container}>
        <Button mode="icon">
          <PeoplePlus />
        </Button>
        <Button mode="icon">
          <Message />
        </Button>
        <Button mode="icon">
          <Share />
        </Button>
        <Button mode="icon">
          <Various />
        </Button>
      </FelaComponent>
    </>
  );
};
