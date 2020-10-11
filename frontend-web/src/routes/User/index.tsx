import React from 'react';
import { FelaComponent } from 'react-fela';

import { Styles } from 'src/utils/fela';
import { FONT_WEIGHT } from 'src/constants/fonts';

import { Page } from 'src/components/wrappers/Page';
import { InputDisplay, InputTextArea } from 'src/components/ui/forms/Input';
import { SocialKit } from 'src/components/blocks/SocialKit';
import { ProfileButtonsPanel } from 'src/components/blocks/ProfileButtonsPanel';
import { TabBars } from 'src/components/blocks/TabBars';
import { Divider } from 'src/components/ui/Divider';
import { useIntl } from 'react-intl';
import { msg } from 'src/i18n/Msg';

const style: Styles<
  | 'nav'
  | 'horizontalContainer'
  | 'verticalContainer'
  | 'bold'
  | 'credentialsMargin'
  | 'mainInfoMargin'
  | 'buttonsPanel'
  | 'kitSocial'
  | 'divider'
> = {
  nav: {
    display: 'flex',
  },
  verticalContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  horizontalContainer: {
    justifyItems: 'flex-end',
    display: 'flex',
    flexDirection: 'row',
  },
  bold: {
    nested: {
      '>div >input': {
        fontWeight: FONT_WEIGHT.SEMIBOLD,
      },
    },
  },
  credentialsMargin: {
    nested: {
      '> *': {
        marginBottom: 1,
      },
    },
  },
  mainInfoMargin: {
    nested: {
      '> *': {
        marginBottom: 13,
      },
    },
  },
  buttonsPanel: {
    marginTop: 60,
  },
  kitSocial: {
    marginTop: 10,
  },
  divider: {
    marginTop: 30,
    marginBottom: 20,
    width: 1050,
  },
};

const User: React.FC = () => {
  const intl = useIntl();
  return (
    <Page layout="profile" navExpanded={false}>
      <FelaComponent style={[style.horizontalContainer]}>
        <FelaComponent style={style.nav}>
          <FelaComponent style={style.verticalContainer}>
            {
              //TODO: avatar
            }
            <div
              style={{
                width: 140,
                height: 140,
                background: 'black',
                marginTop: 8,
                marginLeft: 8,
              }}
            ></div>
            <FelaComponent style={style.buttonsPanel}>
              <ProfileButtonsPanel />
            </FelaComponent>
          </FelaComponent>
        </FelaComponent>
        <FelaComponent style={[style.verticalContainer, { marginLeft: 41 }]}>
          <FelaComponent style={style.horizontalContainer}>
            <FelaComponent style={style.verticalContainer}>
              <FelaComponent style={[style.bold, style.credentialsMargin]}>
                <InputDisplay value="Инна" />
                <InputDisplay value="Ивановна" />
              </FelaComponent>
              <FelaComponent style={style.mainInfoMargin}>
                <InputDisplay value="31.07.1990" />
                <InputDisplay value="E-mail@mail.ru" />
                <InputDisplay value="+7 (999) 999-99-99" />
                <InputDisplay value="Россия, Воронеж" />
              </FelaComponent>
              <FelaComponent style={style.kitSocial}>
                <SocialKit />
              </FelaComponent>
            </FelaComponent>
            <FelaComponent
              style={[style.verticalContainer, { marginLeft: 120 }]}
            >
              <FelaComponent style={style.bold}>
                <InputDisplay
                  value={msg(intl, { id: 'web.routes.User.skills' })}
                />
              </FelaComponent>
              <p>TODO: tags</p>
              <FelaComponent style={[style.bold, { marginTop: 20 }]}>
                <InputDisplay
                  value={msg(intl, { id: 'web.routes.User.experience' })}
                />
              </FelaComponent>
              <InputTextArea
                mode="display"
                name=""
                onChange={() => {}}
                placeholder={{ id: 'web.routes.Main.button_start' }}
                value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              />
            </FelaComponent>
          </FelaComponent>
          <FelaComponent style={style.divider}>
            <Divider color="light" />
          </FelaComponent>
          <FelaComponent style={style.horizontalContainer}>
            <TabBars tabType="profile" />
          </FelaComponent>
          <FelaComponent style={style.horizontalContainer}>
            TODO: content here
          </FelaComponent>
        </FelaComponent>
      </FelaComponent>
    </Page>
  );
};

export default User;
