import React from 'react';
import { useIntl } from 'react-intl';
import { FelaComponent } from 'react-fela';

import { Styles, PropsStyle } from 'src/utils/fela';
import { MsgProps } from 'src/i18n/Msg';
import { COLOR } from 'src/constants/colors';
import { Msg, msg } from 'src/i18n/Msg';
import { VK } from 'src/components/icons/networks/VK';
import { Telegram } from 'src/components/icons/networks/Telegram';
import { Instagram } from 'src/components/icons/networks/Instagram';

type Props = {
  style: PropsStyle;
};

interface NetworkProps {
  id: MsgProps['id'];
  href: string;
  childNode: React.FC;
}

const styles: Styles<'title' | 'linksWrapper'> = {
  title: {
    fontSize: '16px',
    lineHeight: '20px',
    color: COLOR.PRIMARY_500,
  },
  linksWrapper: {
    width: '90px',
    height: '18px',
    marginTop: '13px',
    display: 'flex !important',
    justifyContent: 'space-between',
  },
};

const networks: Array<NetworkProps> = [
  {
    id: 'networks.vk',
    href: 'https://vk.com/ayneed',
    childNode: VK,
  },
  {
    id: 'networks.telegram',
    href: 'https://t.me/ayndme',
    childNode: Telegram,
  },
  {
    id: 'networks.instagram',
    href: 'https://www.instagram.com/aynd.ru/',
    childNode: Instagram,
  },
];

const Title: React.FC = () => (
  <FelaComponent style={styles.title}>
    <Msg id="web.routes.Main.MainPageNetworks.title" />
  </FelaComponent>
);

const Links: React.FC = () => {
  const intl = useIntl();

  return (
    <FelaComponent style={styles.linksWrapper}>
      {networks.map(({ id, href, childNode }) => (
        <a key={id} href={href} title={msg(intl, { id })}>
          {React.createElement(childNode)}
        </a>
      ))}
    </FelaComponent>
  );
};

export const MainPageNetworks: React.FC<Props> = ({ style }) => (
  <FelaComponent style={style}>
    <Title />
    <Links />
  </FelaComponent>
);