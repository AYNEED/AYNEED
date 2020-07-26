import { EVENTS } from 'src/notifications/events';

export interface NotificationsBaseConfig {
  event: keyof typeof EVENTS;
}

export interface NotificationsConfig extends NotificationsBaseConfig {
  type: 'email' | 'ws';
}

export interface IEmailTemplate {
  to: string;
  from: string;
  subject: string;
  text: string;
  html: string;
}

export type TypeToTransport = {
  [key in NotificationsConfig['type']]: <T extends {} = {}>(
    options: NotificationsBaseConfig,
    payload: T
  ) => void;
};
