import { EVENTS } from 'src/notifications/events';

export type Transport = 'email' | 'ws';
export type Event = keyof typeof EVENTS;

export type TypeToTransport = {
  [key in Transport]: <T extends {} = {}>(event: Event, payload: T) => void;
};
