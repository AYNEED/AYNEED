import { Request, Response } from 'express';
import { UserModel } from 'src/models/user';
import jwt, { Secret } from 'jsonwebtoken';

interface authData {
  auth?: string;
}

export const checkTokens = async (req: Request, res: Response) => {
  return new Promise((resolve) => {
    const { access, refresh } = req.cookies.authorization?.split('|');
    if (access && refresh) {
      jwt.verify(
        access,
        process.env.AYNEED_BACKEND_ACCESS_TOKEN as Secret,
        undefined,
        (err, data) => {
          data = data as authData;
          if (err) {
            jwt.verify(
              refresh,
              process.env.AYNEED_BACKEND_REFRESH_TOKEN as Secret,
              undefined,
              (err, data) => {
                if (err) {
                  res.clearCookie('access');
                  res.clearCookie('refresh');
                  res.send();
                  resolve(false);
                } else {
                  const accessToken = generateAccessToken({
                    auth: (data as authData)?.auth,
                  });
                  const refreshToken = generateRefreshToken({
                    auth: (data as authData)?.auth,
                  });
                  UserModel.findByIdAndUpdate(
                    { _id: (data as authData).auth },
                    {
                      'private.tokens.access': accessToken,
                      'private.tokens.refresh': refreshToken,
                    }
                  );
                  res.cookie('access', accessToken);
                  res.cookie('refresh', refreshToken);
                  res.send();
                  resolve(true);
                }
              }
            );
          } else {
            const accessToken = generateAccessToken({
              auth: (data as authData).auth,
            });
            UserModel.findByIdAndUpdate(
              { _id: (data as authData).auth },
              {
                'private.tokens.access': accessToken,
              }
            );
            res.cookie('access', accessToken);
            res.send();
            resolve(true);
          }
        }
      );
    } else {
      res.send();
      resolve(false);
    }
  });
};

const generateAccessToken = async (data: authData) => {
  return jwt.sign(data, process.env.AYNEED_BACKEND_ACCESS_TOKEN as Secret, {
    expiresIn: process.env.AYNEED_BACKEND_ACCESS_TOKEN_EXPIRE,
  });
};

const generateRefreshToken = async (data: authData) => {
  return jwt.sign(data, process.env.AYNEED_BACKEND_REFRESH_TOKEN as Secret, {
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
