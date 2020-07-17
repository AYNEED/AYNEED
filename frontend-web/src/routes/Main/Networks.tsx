import React from 'react';
import { useIntl } from 'react-intl';
import { FelaComponent } from 'react-fela';
import { Styles } from 'src/utils/fela';

import { COLOR } from 'src/constants/colors';

import { Msg, msg } from 'src/i18n/Msg';
import { VK } from 'src/components/icons/networks/VK';
import { Telegram } from 'src/components/icons/networks/Telegram';
import { Instagram } from 'src/components/icons/networks/Instagram';


type Props = {
  style?: object
};

const styles: Styles<'msg' | 'linksWrapper'> = {
  msg: {
    fontSize: '16px',
    lineHeight: '20px',
    letterSpacing: '0.005em',
    color: COLOR.PRIMARY_500,
  },
  linksWrapper: {
    width: '90px',
    height: '18px',
    marginTop: '13px',
    display: 'flex',
    justifyContent: 'space-between',
  }
}


export const Networks: React.FC<Props> = ({ style = {} }) => {
  const intl = useIntl();

  return (
    <FelaComponent style={style}>
      <Msg id="web.routes.Main.Networks.title" style={styles.msg}/>
      <FelaComponent style={styles.linksWrapper}>
        <a
          href="https://vk.com/ayneed"
          title={msg(intl, { id: 'networks.vk' })}
        >
          <VK />
        </a>
        <a
          href="https://t.me/ayndme"
          title={msg(intl, { id: 'networks.telegram' })}
        >
          <Telegram />
        </a>
        <a
          href="https://www.instagram.com/aynd.ru/"
          title={msg(intl, { id: 'networks.instagram' })}
        >
          <Instagram />
        </a>
      </FelaComponent>
    </FelaComponent>
  );
};
