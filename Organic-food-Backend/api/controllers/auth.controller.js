import { register } from '../services/auth.service.js';
import logger from '../../utils/logger.js';
import { successResponse, errorResponse } from '../../utils/response.js';

export const registerUser = async (req, res, next) => {
  try {
    const result = await register(req.body);
    console.log('req.body', req.body);
    return successResponse(res, { message: 'User registered successfully', userId: result._id }, 201);
  } catch (error) {
    logger.error('Register error:', error);
    return errorResponse(res, error.message, 500);
  }
};

