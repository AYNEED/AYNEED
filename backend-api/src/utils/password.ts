import crypto from 'crypto';

import { UserPassword } from 'src/models/user';

const createHash = (password: string, salt: string): string =>
  crypto
    .createHash('sha256')
    .update(password + salt)
    .digest('hex');

export const createPasswordHash = (
  password: string,
  salt: UserPassword['salt']
): string =>
  createHash(
    createHash(password, salt),
    process.env.AYNEED_BACKEND_PASSWORD_SALT || ''
  );

export const verifyPassword = (
  password: string,
  { hash, salt }: UserPassword
): boolean => createPasswordHash(password, salt) === hash;

export const createRandomString = (): string =>
  crypto.randomBytes(48).toString('hex');
