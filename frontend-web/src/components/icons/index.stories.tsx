import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

// Logos
import { LogoAYNeed } from 'src/components/icons/logos/LogoAYNeed';

// Projects
import { Concept } from 'src/components/icons/projects/Concept';
import { Idea } from 'src/components/icons/projects/Idea';
import { MVPStatus } from 'src/components/icons/projects/MVPStatus';
import { ProjectsStatus } from 'src/components/icons/projects/ProjectsStatus';

// Interactions
import { Burger } from 'src/components/icons/interactions/Burger';
import { CheckPoint } from 'src/components/icons/interactions/CheckPoint';
import { Edit } from 'src/components/icons/interactions/Edit';
import { Favourites } from 'src/components/icons/interactions/Favourites';
import { Message } from 'src/components/icons/interactions/Message';
import { Notifications } from 'src/components/icons/interactions/Notifications';
import { People } from 'src/components/icons/interactions/People';
import { PeopleMinus } from 'src/components/icons/interactions/PeopleMinus';
import { PeoplePlus } from 'src/components/icons/interactions/PeoplePlus';
import { Save } from 'src/components/icons/interactions/Save';
import { Search } from 'src/components/icons/interactions/Search';
import { SearchSettings } from 'src/components/icons/interactions/SearchSettings';
import { Team } from 'src/components/icons/interactions/Team';
import { Add } from 'src/components/icons/interactions/Add';
import { AddPhoto } from 'src/components/icons/interactions/AddPhoto';
import { Arrow } from 'src/components/icons/interactions/Arrow';
import { ArrowSlide } from 'src/components/icons/interactions/ArrowSlide';
import { Close } from 'src/components/icons/interactions/Close';
import { Complain } from 'src/components/icons/interactions/Complain';
import { Help } from 'src/components/icons/interactions/Help';
import { Main } from 'src/components/icons/interactions/Main';
import { Remove } from 'src/components/icons/interactions/Remove';
import { Settings } from 'src/components/icons/interactions/Settings';
import { Share } from 'src/components/icons/interactions/Share';
import { Various } from 'src/components/icons/interactions/Various';
import { Correctly } from 'src/components/icons/interactions/Correctly';
import { ShippedDelivered } from 'src/components/icons/interactions/ShippedDelivered';
import { Size } from 'src/components/icons/interactions/Size';

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
import { Smiley } from 'src/components/icons/messengers/Smiley';
import { Treds } from 'src/components/icons/messengers/Treds';

export default {
  title: 'Documentation/Icons',
} as Meta;

export const Logos: Story = () => (
  <>
    <LogoAYNeed />
  </>
);

export const Projects: Story = () => (
  <>
    <ProjectsStatus />
    <Idea />
    <Concept />
    <MVPStatus />
  </>
);

export const Interactions: Story = () => (
  <>
    <Favourites />
    <Notifications />
    <Message />
    <Search />
    <Edit />
    <Save />
    <CheckPoint />
    <SearchSettings />
    <Burger />
    <Team />
    <People />
    <PeoplePlus />
    <PeopleMinus />
    <br />
    <Close />
    <Add />
    <Arrow />
    <ArrowSlide />
    <Help />
    <Complain />
    <Share />
    <Various />
    <Main />
    <Settings />
    <AddPhoto />
    <Remove />
    <br />
    <Correctly />
    <ShippedDelivered />
    <Size />
  </>
);

export const Networks: Story = () => (
  <>
    <Sn />
    <VK />
    <Facebook />
    <Instagram />
    <Telegram />
    <LinkedIn />
    <Google />
  </>
);

export const Messengers: Story = () => (
  <>
    <Smiley />
    <NotRead />
    <Microphone />
    <Attach />
    <Like />
    <Dislike />
    <Send />
    <Treds />
  </>
);

export const OldDesign: Story = () => <>TODO</>;
