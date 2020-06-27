import mongoose from 'mongoose';

const name = process.env.AYNEED_BACKEND_MONGO_DB_NAME || '';
const host = process.env.AYNEED_BACKEND_MONGO_DB_HOST || '';

const url = `mongodb://${host}/${name}`;

export const connect = async (): Promise<void> => {
  await mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
