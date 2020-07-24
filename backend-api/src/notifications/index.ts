import { TypeToTransport, NotificationsConfig } from 'src/notifications/types';
import { email } from 'src/notifications/transports/email';
import { ws } from 'src/notifications/transports/ws';

const typeToTransport: TypeToTransport = {
  email,
  ws,
};

export const send = async <T extends {} = {}>(
  options: NotificationsConfig,
  payload: T
): Promise<void> => {
  const transport = typeToTransport[options.type];

  delete options.type;
  return transport(options, payload);
};
