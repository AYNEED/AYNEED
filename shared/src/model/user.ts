import { Locales, TimeZone, Dates } from '../i18n';
import { GENDER, IP, URL } from './other';

type Contact = {
  value: string;
  isVerified: boolean;
};

export interface User {
  id: string;
  isOnline: boolean;

  personal: {
    login: string;
    firstName: string;
    lastName: string;
    bornAt?: Dates['ISO'];
    gender?: GENDER;
    photo?: URL[];
  };

  about: {
    aboutUser?: string;
    aboutCareer?: string;
    bio?: string;
  };

  regional: {
    city?: string;
    state?: string;
    country?: string;
    timeZone?: TimeZone;
    language: Locales;
  };

  contacts: {
    email?: Contact;
    phone?: Contact;
  };

  meta: {
    createdAt: Dates['ISO'];
    createdFrom: IP;
  };
}

export interface Model {
  users: User[];
}
