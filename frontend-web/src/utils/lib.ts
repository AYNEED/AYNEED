export const getAPIUrl = (): string => {
  const params = {
    protocol: process.env.REACT_APP_AYNEED_BACKEND_API_PROTOCOL,
    hostname: process.env.REACT_APP_AYNEED_BACKEND_API_HOSTNAME,
    port: process.env.REACT_APP_AYNEED_BACKEND_API_PORT,
  };

  // TODO: add production mode
  return `${params.protocol}//${params.hostname}:${params.port}`;
};
