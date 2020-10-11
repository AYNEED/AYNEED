import React from 'react';
import { FelaComponent } from 'react-fela';

import { Styles } from 'src/utils/fela';

import { Google } from 'src/components/icons/networks/Google';
import { Facebook } from 'src/components/icons/networks/Facebook';
import { VK } from 'src/components/icons/networks/VK';
import { LinkedIn } from 'src/components/icons/networks/LinkedIn';
import { Telegram } from 'src/components/icons/networks/Telegram';
import { Instagram } from 'src/components/icons/networks/Instagram';
import { Button } from 'src/components/ui/forms/Button';

const styles: Styles<'container'> = {
  container: {
    width: 244,
    height: 24,
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
};

export const SocialKit: React.FC = () => {
  //TODO: props -> user > handle network links from user object
  return (
    <>
      <FelaComponent style={styles.container}>
        <Button mode="icon">
          <VK />
        </Button>
        <Button mode="icon">
          <Facebook />
        </Button>
        <Button mode="icon">
          <Instagram />
        </Button>
        <Button mode="icon">
          <Telegram />
        </Button>
        <Button mode="icon">
          <LinkedIn />
        </Button>
        <Button mode="icon">
          <Google />
        </Button>
      </FelaComponent>
    </>
  );
};
