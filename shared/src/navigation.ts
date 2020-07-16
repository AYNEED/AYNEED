export enum ROUTES {
  MAIN = '/',

  FORGOT_PASSWORD = '/forgot-password',
  FORGOT_PASSWORD_CHANGE = '/forgot-password/change',

  SIGN_IN_EMAIL = '/sign-in',
  // SIGN_IN_PHONE = '/sign-in/phone',
  SIGN_UP_EMAIL = '/sign-up',
  // SIGN_UP_PHONE = '/sign-up/phone',

  FEED = '/feed',
  USER = '/u/:id([a-z0-9-]+)',
}
