export const USER_UPDATES = {
  USER_ADDED: 'USER_ADDED',
  USER_UPDATED: 'USER_UPDATED',
} as const;

export const BEGINNING_UPDATES = {
  BEGINNING_ADDED: 'BEGINNING_ADDED',
  BEGINNING_UPDATED: 'BEGINNING_UPDATED',
} as const;

/**
 * Graphql-schema updates
 */
export const UPDATES = {
  ...USER_UPDATES,
  ...BEGINNING_UPDATES,
} as const;

/**
 * List of events at which we send notifications
 */
export const EVENTS = {
  ON_SIGN_UP_EMAIL: 'ON_SIGN_UP_EMAIL',
  ON_USER_FORGOT_PASSWORD: 'ON_USER_FORGOT_PASSWORD',
} as const;
