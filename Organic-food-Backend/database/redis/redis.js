import { createClient } from 'redis';
import logger from '../../utils/logger.js';

let client;
export const connectRedis = async () => {
  client = createClient();
  client.on('error', (err) => console.log('Redis Error', err));
  await client.connect();
  logger.info('Redis:           Connected successfully');

};
export default client;