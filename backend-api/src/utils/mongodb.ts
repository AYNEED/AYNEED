import mongoose, { ConnectionOptions, SchemaOptions } from 'mongoose';

export const name = process.env.AYNEED_BACKEND_MONGO_DB_NAME || '';
export const host = process.env.AYNEED_BACKEND_MONGO_DB_HOST || '';

export const options: ConnectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
  authSource: 'admin',
};

export const schemaOptions: SchemaOptions = {
  id: true,
  versionKey: false,
  timestamps: true,
};

export const connect = async (): Promise<void> => {
  try {
    await mongoose.connect(`mongodb://${host}/${name}`, options);
  } catch (error) {
    console.error(error);
  }
};
