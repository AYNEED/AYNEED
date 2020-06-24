import mongoose from 'mongoose';

const url = process.env.AYNEED_BACKEND_MONGO_DB_URL || '';

export const connect = async (): Promise<void> => {
  await mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
