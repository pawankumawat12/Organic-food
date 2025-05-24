import { register, loginuser } from '../services/auth.service.js';
import logger from '../../utils/logger.js';
import { successResponse, errorResponse } from '../../utils/response.js';

export const registerUser = async (req, res, next) => {
  try {
    const result = await register(req.body);
    return successResponse(res, {
      message: result.message,
      userId: result.userId,
      token: result.token,
    }, 201);
  } catch (error) {
    logger.error('Register error:', error);
    return errorResponse(res, error.message, 500);
  }
};

export const signin = async (req, res) => {
  try {
    const result = await loginuser(req.body);
    console.log('Login result:', req.body);
    return successResponse(res, {
      message: 'Login successful',
      token: result.token,
      user: result.user,
    });
  } catch (error) {
    logger.error('Login error:', error);
    return errorResponse(res, error.message, 401);
  }
};
