import React from 'react';
import { FelaComponent } from 'react-fela';

import { Styles } from 'src/utils/fela';
import { COLOR } from 'src/constants/colors';
import { ROUTES } from 'shared';

import { Help } from 'src/components/icons/interactions/Help';
import { Settings } from 'src/components/icons/interactions/Settings';
import { Favourites } from 'src/components/icons/interactions/Favourites';
import { People } from 'src/components/icons/interactions/People';
import { Team } from 'src/components/icons/interactions/Team';

import { MVPStatus } from 'src/components/icons/projects/MVPStatus';
import { Idea } from 'src/components/icons/projects/Idea';
import { Concept } from 'src/components/icons/projects/Concept';
import { ProjectsStatus } from 'src/components/icons/projects/ProjectsStatus';

import { Button, ButtonLink } from 'src/components/ui/forms/Button';
import { Divider } from 'src/components/ui/Divider';
import { Logo } from 'src/components/ui/Logo';
import { LogoAYNeed } from 'src/components/logos/LogoAYNeed';

export type Props = {
  logged: boolean;
  expanded: boolean;
  disabled?: boolean;
};

type UserProps = {
  expanded: boolean;
  disabled?: boolean;
};

const style: Styles<
  'container' | 'header' | 'body' | 'footer' | 'divider' | 'logo' | 'indicators'
> = {
  container: ({ width }: { width: number }) => ({
    width,
    backgroundColor: COLOR.WHITE,
    borderRightWidth: 1,
    borderRightStyle: 'solid',
    borderRightColor: COLOR.SECONDARY_400,
    display: 'flex',
    flexDirection: 'column',
    position: 'sticky',
    top: 0,
    marginLeft: 0,
    minHeight: '100vh',
  }),
  header: {
    marginBottom: 30,
    display: 'flex',
    flexDirection: 'row',
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 20,
    nested: {
      '> *': {
        marginRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
      },
    },
  },
  footer: {
    marginLeft: 20,
    marginBottom: 10,
    marginTop: 'auto',
    nested: {
      '> *': {
        paddingTop: 10,
        paddingBottom: 10,
      },
    },
  },
  indicators: {},
  divider: {
    marginRight: 20,
  },
  logo: ({ expanded }: { expanded: boolean }) => ({
    marginTop: 20,
    marginBottom: 30,
    marginLeft: expanded ? 20 : 10,
  }),
};

export const NavigationPanel: React.FC<Props> = ({
  logged,
  expanded,
  disabled,
}) => {
  if (disabled) {
    expanded = false;
  }

  // TODO: logged need to be user object

  return (
    <FelaComponent style={style.container} as="nav" width={expanded ? 256 : 64}>
      <FelaComponent expanded={expanded} style={style.logo}>
        {expanded ? (
          <Logo />
        ) : (
          <LogoAYNeed
            cropped
            height={16}
            width={44}
            firstColor={disabled ? COLOR.SECONDARY_100 : undefined}
            secondColor={disabled ? COLOR.SECONDARY_500 : undefined}
          />
        )}
      </FelaComponent>
      {logged ? <LoggedUser expanded={expanded} disabled={disabled} /> : null}
      <FelaComponent style={style.body}>
        <ButtonLink
          disabled={disabled}
          url={{ scheme: ROUTES.MAIN }}
          mode={'navigation'}
          text={
            expanded
              ? { id: 'web.components.blocks.NavigationPanel.team' }
              : undefined
          }
          children={<Team />}
        ></ButtonLink>
        <ButtonLink
          disabled={disabled}
          url={{ scheme: ROUTES.MAIN }}
          mode={'navigation'}
          text={
            expanded
              ? { id: 'web.components.blocks.NavigationPanel.ideas' }
              : undefined
          }
          children={<Idea />}
        ></ButtonLink>
        <ButtonLink
          disabled={disabled}
          url={{ scheme: ROUTES.MAIN }}
          mode={'navigation'}
          text={
            expanded
              ? { id: 'web.components.blocks.NavigationPanel.concepts' }
              : undefined
          }
          children={<Concept />}
        ></ButtonLink>
        <ButtonLink
          disabled={disabled}
          url={{ scheme: ROUTES.MAIN }}
          mode={'navigation'}
          text={
            expanded
              ? { id: 'web.components.blocks.NavigationPanel.mvp' }
              : undefined
          }
          children={<MVPStatus />}
        ></ButtonLink>
      </FelaComponent>
      <FelaComponent style={style.footer}>
        <Button
          mode="icon"
          children={<Settings />}
          disabled={disabled}
        ></Button>
        <Button mode="icon" children={<Help />} disabled={disabled}></Button>
      </FelaComponent>
    </FelaComponent>
  );
};

export const LoggedUser: React.FC<UserProps> = ({ expanded, disabled }) => {
  return (
    <>
      <FelaComponent style={style.header}>
        {expanded && (
          // TODO: avatar
          <div
            style={{
              width: 90,
              height: 90,
              marginLeft: 20,
              background: 'grey',
            }}
          ></div>
        )}
        <FelaComponent style={style.body}>
          {
            // TODO: indicators (messages, notifications)}
          }
          <div>ind</div>
          <div>ind</div>
        </FelaComponent>
      </FelaComponent>
      <FelaComponent style={style.body}>
        <ButtonLink
          disabled={disabled}
          url={{ scheme: ROUTES.MAIN }}
          mode={'navigation'}
          text={
            expanded
              ? { id: 'web.components.blocks.NavigationPanel.beginnings' }
              : undefined
          }
          children={<ProjectsStatus />}
        ></ButtonLink>
        <ButtonLink
          disabled={disabled}
          url={{ scheme: ROUTES.MAIN }}
          mode={'navigation'}
          text={
            expanded
              ? { id: 'web.components.blocks.NavigationPanel.subscriptions' }
              : undefined
          }
          children={<Favourites />}
        ></ButtonLink>
        <ButtonLink
          disabled={disabled}
          url={{ scheme: ROUTES.MAIN }}
          mode={'navigation'}
          text={
            expanded
              ? { id: 'web.components.blocks.NavigationPanel.friends' }
              : undefined
          }
          children={<People />}
        ></ButtonLink>
        <FelaComponent style={style.divider}>
          <Divider color="light" />
        </FelaComponent>
      </FelaComponent>
    </>
  );
};
