import {
  EVENTS,
  USER_UPDATES,
  BEGINNING_UPDATES,
} from 'src/notifications/events';
import { User, Beginning } from 'src/__generated__';

export type Transport = 'email' | 'ws';
export type Event = keyof typeof EVENTS;

export type TypeToTransport = {
  [key in Transport]: <T extends {} = {}>(event: Event, payload: T) => void;
};

export type Notification = {
  // transport: 'ws' | 'email';
  // recipient: 'user' | 'users';
  // payload: 'custom fields';
};

export type ActionUpdate =
  | {
      event: keyof typeof USER_UPDATES;
      payload: User;
    }
  | {
      event: keyof typeof BEGINNING_UPDATES;
      payload: Beginning;
    };
