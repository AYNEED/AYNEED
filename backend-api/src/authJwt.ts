import { Request, Response } from 'express';
import { UserModel } from './models/user';

const jwt = require('jsonwebtoken');
type authData = {
  auth: string;
};

export const checkTokens = async (req: Request, res: Response) => {
  const { access, refresh } = req.cookies.authorization?.split('|');
  if (access && refresh) {
    return jwt.verify(
      access,
      process.env.AYNEED_BACKEND_ACCESS_TOKEN,
      (err: any, data: authData) => {
        if (err) {
          return jwt.verify(
            refresh,
            process.env.AYNEED_BACKEND_REFRESH_TOKEN,
            (err: any, data: authData) => {
              if (err) {
                res.clearCookie('access');
                res.clearCookie('refresh');

                return res.send();
              } else {
                const accessToken = generateAccessToken({ auth: data.auth });
                const refreshToken = generateRefreshToken({ auth: data.auth });
                UserModel.findByIdAndUpdate(
                  { _id: data.auth },
                  {
                    'private.tokens.access': accessToken,
                    'private.tokens.refresh': refreshToken,
                  }
                );
                res.cookie('access', accessToken);
                res.cookie('refresh', refreshToken);

                return res.send();
              }
            }
          );
        } else {
          const accessToken = generateAccessToken({ auth: data.auth });
          UserModel.findByIdAndUpdate(
            { _id: data.auth },
            {
              'private.tokens.access': accessToken,
            }
          );
          res.cookie('access', accessToken);

          return res.send();
        }
      }
    );
  } else {
    return res.send();
  }
};

const generateAccessToken = async (data: authData) => {
  return jwt.sign(data, process.env.AYNEED_BACKEND_ACCESS_TOKEN, {
    expiresIn: process.env.AYNEED_BACKEND_ACCESS_TOKEN_EXPIRE,
  });
};

const generateRefreshToken = async (data: authData) => {
  return jwt.sign(data, process.env.AYNEED_BACKEND_REFRESH_TOKEN, {
    expiresIn: process.env.AYNEED_BACKEND_REFRESH_TOKEN_EXPIRE,
  });
};
export const generateTokens = async (data: authData) => {
  const access = await generateAccessToken(data);
  const refresh = await generateRefreshToken(data);
  return {
    access: access,
    refresh: refresh,
  };
};
