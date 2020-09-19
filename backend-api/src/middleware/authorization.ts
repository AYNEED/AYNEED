import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import {
  findUserByToken,
  updateUserToken,
  findUserById,
} from 'src/helpers/users';

export const [ACCESS_SECRET, ACCESS_EXPIRE, REFRESH_SECRET, REFRESH_EXPIRE] = [
  process.env.AYNEED_BACKEND_ACCESS_TOKEN || '',
  process.env.AYNEED_BACKEND_ACCESS_TOKEN_EXPIRE || '15m',
  process.env.AYNEED_BACKEND_REFRESH_TOKEN || '',
  process.env.AYNEED_BACKEND_REFRESH_TOKEN_EXPIRE || '30d',
];

export interface IAuthorization {
  req: Request;
  res: Response;
}

export type AuthToken = {
  id: string;
  iat: number;
  exp: number;
  expired: boolean;
};

export const createAccessToken = (payload: {}): string =>
  jwt.sign(payload, ACCESS_SECRET, { expiresIn: ACCESS_EXPIRE });

export const createRefreshToken = (payload: {}): string =>
  jwt.sign(payload, REFRESH_SECRET, { expiresIn: REFRESH_EXPIRE });

export const verifyAccessToken = (access: string): Promise<AuthToken> => {
  return new Promise((resolve) => {
    jwt.verify(access, ACCESS_SECRET, (err, data) =>
      resolve({ ...(data as AuthToken), expired: !!err })
    );
  });
};

export const verifyRefreshToken = (refresh: string): Promise<AuthToken> => {
  return new Promise((resolve) => {
    jwt.verify(refresh, REFRESH_SECRET, (err, data) =>
      resolve({ ...(data as AuthToken), expired: !!err })
    );
  });
};

export const authentication = async ({
  req,
  res,
}: IAuthorization): Promise<void> => {
  const { access, refresh } = req.cookies;

  if (!access || !refresh) {
    const user = await findUserByToken({ access, refresh });
    if (user) {
      await updateUserToken(user.id, { access: '', refresh: '' });
    }

    res.clearCookie('access');
    res.clearCookie('refresh');
    delete req.user?.id;

    return;
  }

  const checkedAccess = await verifyAccessToken(access);
  const checkedRefresh = await verifyRefreshToken(refresh);

  if (
    (checkedAccess.expired && checkedRefresh.expired) ||
    (!checkedAccess.expired && checkedRefresh.expired)
  ) {
    const user = await findUserById(checkedRefresh.id);
    if (user) {
      await updateUserToken(user.id, { access: '', refresh: '' });
    }

    res.clearCookie('access');
    res.clearCookie('refresh');
    delete req.user?.id;

    return;
  }

  if (checkedAccess.expired && !checkedRefresh.expired) {
    const user = await findUserByToken({ access, refresh });
    if (user) {
      const renewAccess = createAccessToken({ id: checkedRefresh.id });
      const renewRefresh = createRefreshToken({ id: checkedRefresh.id });

      const updated = await updateUserToken(user.id, {
        access: renewAccess,
        refresh: renewRefresh,
      });

      res.cookie('access', renewAccess);
      res.cookie('refresh', renewRefresh);
      req.user = { id: updated.id };

      return;
    }

    res.clearCookie('access');
    res.clearCookie('refresh');
    delete req.user?.id;

    return;
  }

  if (!checkedAccess.expired && !checkedRefresh.expired) {
    const user = await findUserById(checkedAccess.id);
    req.user = { id: user.id };

    return;
  }
};
