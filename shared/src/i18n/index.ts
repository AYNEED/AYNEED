// ISO 639-5
import { rus } from './dictionaries/rus';

export const locales = {
  rus: {
    title: 'Русский',
    dictionary: rus,
  },
} as const;

export const LOCALES: Locales[] = Object.keys(locales) as any[];
export const defaultLocale = 'rus';
const defaultDictionary = locales[defaultLocale].dictionary;

export type Locales = keyof typeof locales;
export type Dictionary = typeof defaultDictionary;
export type DictionaryKey = keyof Dictionary;

export type TimeZone = string;

export type Dates = {
  ISO: string;
  timestamp: number;
};
