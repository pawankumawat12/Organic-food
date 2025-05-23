import { register } from '../services/auth.service.js';
import logger from '../../utils/logger.js';

export const registerUser = async (req, res, next) => {
  try {
    const result = await register(req.body);
    console.log('req.body', req.body);
    res.status(201).json(result);
  } catch (error) {
    logger.error('Register error:', error);
    res.status(error.status || 500).json({ message: error.message || 'Internal Server Error' });
  }
};
