import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { RendererProvider, FelaComponent } from 'react-fela';

import { Styles, renderer } from 'src/utils/fela';
import { commonStyle } from 'src/utils/storybook';
import { IconBaseProps } from 'src/types';

// Projects
import { Concept } from 'src/components/icons/projects/Concept';
import { Idea } from 'src/components/icons/projects/Idea';
import { MVPStatus } from 'src/components/icons/projects/MVPStatus';
import { ProjectsStatus } from 'src/components/icons/projects/ProjectsStatus';

// Interactions
import { Add } from 'src/components/icons/interactions/Add';
import { AddPhoto } from 'src/components/icons/interactions/AddPhoto';
import { Arrow } from 'src/components/icons/interactions/Arrow';
import { ArrowSlide } from 'src/components/icons/interactions/ArrowSlide';
import { Burger } from 'src/components/icons/interactions/Burger';
import { Calendar } from 'src/components/icons/interactions/Calendar';
import { CheckPoint } from 'src/components/icons/interactions/CheckPoint';
import { Close } from 'src/components/icons/interactions/Close';
import { Complain } from 'src/components/icons/interactions/Complain';
import { Correctly } from 'src/components/icons/interactions/Correctly';
import { Edit } from 'src/components/icons/interactions/Edit';
import { Favourites } from 'src/components/icons/interactions/Favourites';
import { Help } from 'src/components/icons/interactions/Help';
import { Main } from 'src/components/icons/interactions/Main';
import { Message } from 'src/components/icons/interactions/Message';
import { Notifications } from 'src/components/icons/interactions/Notifications';
import { People } from 'src/components/icons/interactions/People';
import { PeopleMinus } from 'src/components/icons/interactions/PeopleMinus';
import { PeoplePlus } from 'src/components/icons/interactions/PeoplePlus';
import { Remove } from 'src/components/icons/interactions/Remove';
import { Save } from 'src/components/icons/interactions/Save';
import { Search } from 'src/components/icons/interactions/Search';
import { SearchSettings } from 'src/components/icons/interactions/SearchSettings';
import { Settings } from 'src/components/icons/interactions/Settings';
import { Share } from 'src/components/icons/interactions/Share';
import { ShippedDelivered } from 'src/components/icons/interactions/ShippedDelivered';
import { Size } from 'src/components/icons/interactions/Size';
import { Team } from 'src/components/icons/interactions/Team';
import { Various } from 'src/components/icons/interactions/Various';

// Networks
import { Sn } from 'src/components/icons/networks/Sn';
import { Facebook } from 'src/components/icons/networks/Facebook';
import { Google } from 'src/components/icons/networks/Google';
import { Instagram } from 'src/components/icons/networks/Instagram';
import { LinkedIn } from 'src/components/icons/networks/LinkedIn';
import { Telegram } from 'src/components/icons/networks/Telegram';
import { VK } from 'src/components/icons/networks/VK';

// Messengers
import { Attach } from 'src/components/icons/messengers/Attach';
import { Dislike } from 'src/components/icons/messengers/Dislike';
import { Like } from 'src/components/icons/messengers/Like';
import { Microphone } from 'src/components/icons/messengers/Microphone';
import { NotRead } from 'src/components/icons/messengers/NotRead';
import { Send } from 'src/components/icons/messengers/Send';
import { Smile } from 'src/components/icons/messengers/Smile';
import { Treds } from 'src/components/icons/messengers/Treds';

export default {
  title: 'Atoms/Icons',
} as Meta;

type Icons = {
  icon: React.FC<IconBaseProps>;
  filled?: boolean;
};

const style: Styles<'codeWrapper'> = {
  codeWrapper: {
    paddingLeft: 10,
  },
};

const IconsTable: React.FC<{ icons: Icons[] }> = ({ icons }) => (
  <RendererProvider renderer={renderer}>
    <table>
      <tbody>
        {icons.map((icon) => (
          <tr key={icon.icon.name}>
            <td>
              <icon.icon />
            </td>
            <FelaComponent style={style.codeWrapper} as="td">
              <FelaComponent style={commonStyle.code} as="code">
                {`<${icon.icon.name} />`}
              </FelaComponent>
            </FelaComponent>
            <td>{icon.filled && <icon.icon filled />}</td>
            <FelaComponent style={style.codeWrapper} as="td">
              {icon.filled && (
                <FelaComponent style={commonStyle.code} as="code">
                  {`<${icon.icon.name} filled />`}
                </FelaComponent>
              )}
            </FelaComponent>
          </tr>
        ))}
      </tbody>
    </table>
  </RendererProvider>
);

export const Projects: Story = () => (
  <IconsTable
    icons={[
      { icon: ProjectsStatus },
      { icon: Idea },
      { icon: Concept },
      { icon: MVPStatus },
    ]}
  />
);

export const Interactions: Story = () => (
  <IconsTable
    icons={[
      { icon: Favourites, filled: true },
      { icon: Notifications, filled: true },
      { icon: Message, filled: true },
      { icon: Search },
      { icon: Edit },
      { icon: Save },
      { icon: CheckPoint },
      { icon: SearchSettings },
      { icon: Burger },
      { icon: Team },
      { icon: People },
      { icon: PeoplePlus },
      { icon: PeopleMinus },
      { icon: Close },
      { icon: Add },
      { icon: Arrow },
      { icon: ArrowSlide },
      { icon: Help },
      { icon: Complain },
      { icon: Share },
      { icon: Various },
      { icon: Main },
      { icon: Settings },
      { icon: AddPhoto },
      { icon: Remove },
      { icon: ShippedDelivered },
      { icon: Correctly },
      { icon: Size },
      { icon: Calendar },
    ]}
  />
);

export const Networks: Story = () => (
  <IconsTable
    icons={[
      { icon: Sn },
      { icon: VK },
      { icon: Facebook },
      { icon: Instagram },
      { icon: Telegram },
      { icon: LinkedIn },
      { icon: Google },
    ]}
  />
);

export const Messengers: Story = () => (
  <IconsTable
    icons={[
      { icon: Smile },
      { icon: NotRead },
      { icon: Microphone },
      { icon: Attach },
      { icon: Like, filled: true },
      { icon: Dislike, filled: true },
      { icon: Send },
      { icon: Treds },
    ]}
  />
);
