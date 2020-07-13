import React from 'react';
import { useIntl } from 'react-intl';

import { Msg, msg } from 'src/i18n/Msg';
import { VK } from 'src/components/icons/networks/VK';
import { Telegram } from 'src/components/icons/networks/Telegram';
import { Instagram } from 'src/components/icons/networks/Instagram';

export const Networks: React.FC = () => {
  const intl = useIntl();

  return (
    <>
      <Msg id="web.routes.Main.Networks.title" />

      <ul>
        <li>
          <a
            href="https://vk.com/ayneed"
            title={msg(intl, { id: 'networks.vk' })}
          >
            <VK />
          </a>
        </li>
        <li>
          <a
            href="https://t.me/ayndme"
            title={msg(intl, { id: 'networks.telegram' })}
          >
            <Telegram />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/aynd.ru/"
            title={msg(intl, { id: 'networks.instagram' })}
          >
            <Instagram />
          </a>
        </li>
      </ul>
    </>
  );
};
