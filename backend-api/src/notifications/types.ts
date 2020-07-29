import { EVENTS } from 'src/notifications/events';

export interface NotificationsBaseConfig {
  event: keyof typeof EVENTS;
}

export interface NotificationsConfig extends NotificationsBaseConfig {
  type: 'email' | 'ws';
}

export type TypeToTransport = {
  [key in NotificationsConfig['type']]: <T extends {} = {}>(
    options: NotificationsBaseConfig,
    payload: T
  ) => void;
};
