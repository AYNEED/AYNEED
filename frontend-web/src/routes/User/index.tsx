import React from 'react';
import { FelaComponent } from 'react-fela';

import { Page } from 'src/components/wrappers/Page';
import { Styles } from 'src/utils/fela';
import { InputDisplay } from 'src/components/ui/forms/Input';

const style: Styles<
  'nav' | 'body' | 'userInfo' | 'block' | 'content' | 'container'
> = {
  nav: {
    height: '500px',

    display: 'flex',
    background: 'red',
    margin: 5,
  },
  userInfo: {
    display: 'flex',
    flexDirection: 'column',
    height: 24,
    nested: {
      '> p': {
        marginTop: 1,
      },
      '> input': {
        marginTop: 13,
      },
    },
  },
  container: {
    justifyItems: 'flex-end',
    flexDirection: 'column',
    display: 'flex',
    background: 'blue',
    margin: 5,
  },
  body: {
    justifyItems: 'flex-end',
    display: 'flex',
    flexDirection: 'row',
  },
  block: {
    marginRight: 10,
    width: 100,
    background: 'green',
    height: 50,
  },
  content: {},
};

const User: React.FC = () => (
  <Page layout="profile" navExpanded={false}>
    <FelaComponent style={style.body}>
      <FelaComponent style={style.nav}>
        <div style={{ width: 140, height: 140, background: 'black' }}></div>
      </FelaComponent>
      <FelaComponent style={style.container}>
        <FelaComponent style={style.userInfo}>
          <InputDisplay value="Инна" />
          <InputDisplay value="Ивановна" />
          <InputDisplay value="31.07.1990" />
          <InputDisplay value="E-mail@mail.ru" />
          <InputDisplay value="+7 (999) 999-99-99" />
          <InputDisplay value="Россия, Воронеж" />
        </FelaComponent>
      </FelaComponent>
    </FelaComponent>
  </Page>
);

export default User;
