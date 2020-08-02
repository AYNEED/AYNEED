import { TypeToTransport, Transport, Event } from 'src/notifications/types';
import { email } from 'src/notifications/transports/email';
import { ws } from 'src/notifications/transports/ws';

const typeToTransport: TypeToTransport = {
  email,
  ws,
};

export const send = async <T extends {} = {}>(
  transportName: Transport | Transport[],
  event: Event,
  payload: T
): Promise<void[]> => {
  const transports: Transport[] = Array.isArray(transportName)
    ? transportName
    : [transportName];

  return Promise.all(
    transports.map((name) => typeToTransport[name](event, payload))
  );
};
