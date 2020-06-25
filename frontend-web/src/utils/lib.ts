export const getAPIUrl = (protocol: 'http' | 'ws'): string => {
  const params = {
    protocol,
    hostname: process.env.REACT_APP_AYNEED_BACKEND_API_HOSTNAME,
    port: process.env.REACT_APP_AYNEED_BACKEND_API_PORT,
  };

  // TODO: add production mode
  return `${params.protocol}://${params.hostname}:${params.port}`;
};
