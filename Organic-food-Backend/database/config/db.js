import mongoose from 'mongoose';
import logger from '../../utils/logger.js';

export const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    logger.info('MongoDB:         Connected successfully');
    logger.info(`MongoDB:         Database: ${mongoose.connection.name}`);
    logger.info(`MongoDB:         Host:     ${mongoose.connection.host}`);
    logger.info(`MongoDB:         Port:     ${mongoose.connection.port}`);
    // logger.info(`MongoDB:         User:     ${mongoose.connection.user}`);
    logger.info(`MongoDB:         AuthSource: ${mongoose.connection.db.databaseName}`);
    // logger.info(`MongoDB:         AuthMechanism: ${mongoose.connection.db.authMechanism}`);
  } catch (err) {
    logger.error(`MongoDB connection failed: ${err.message}`);
    throw err;
  }
};
