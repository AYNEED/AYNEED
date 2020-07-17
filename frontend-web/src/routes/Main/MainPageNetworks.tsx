import React from 'react';
import { useIntl } from 'react-intl';

import { FelaComponent } from 'react-fela';
import { Styles, propsStyle } from 'src/utils/fela';
import { DictionaryKey } from 'shared';

import { COLOR } from 'src/constants/colors';
import { Msg, msg } from 'src/i18n/Msg';
import { VK } from 'src/components/icons/networks/VK';
import { Telegram } from 'src/components/icons/networks/Telegram';
import { Instagram } from 'src/components/icons/networks/Instagram';


type Props = {
  style?: propsStyle
};

const styles: Styles<'msg' | 'linksWrapper'> = {
  msg: {
    fontSize: '16px',
    lineHeight: '20px',
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

const networks: Array<{ id: DictionaryKey, href: string, childNode: React.FC }> = [
  {
    id: "networks.vk",
    href: "https://vk.com/ayneed",
    childNode: VK,
  },
  {
    id: "networks.telegram",
    href: "https://t.me/ayndme",
    childNode: Telegram,
  },
  {
    id: "networks.instagram",
    href: "https://www.instagram.com/aynd.ru/",
    childNode: Instagram,
  },
] 


export const Networks: React.FC<Props> = ({ style = {} }) => {
  const intl = useIntl();

  return (
    <FelaComponent style={style}>
      <Msg id="web.routes.Main.Networks.title" style={styles.msg}/>
      <FelaComponent style={styles.linksWrapper}>
        {networks.map(network => (
          <a 
            key={network.id}
            href={network.href}
            title={msg(intl, { id: network.id })}
          >
            { React.createElement(network.childNode) }
          </a>
        ))}
      </FelaComponent>
    </FelaComponent>
  );
};