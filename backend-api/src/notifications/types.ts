import {
  EVENTS,
  USER_UPDATES,
  PROJECT_UPDATES,
} from 'src/notifications/events';
import { User, Project } from 'src/generated';

export type Event = keyof typeof EVENTS;

export type Notification = {
  event: Event;
  payload: {
    from: 'ayneed';
    to: User['id'];
  };
};

export type Update =
  | {
      event: keyof typeof USER_UPDATES;
      payload: User;
    }
  | {
      event: keyof typeof PROJECT_UPDATES;
      payload: Project;
    };
