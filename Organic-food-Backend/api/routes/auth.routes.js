import express from 'express';
import { registerUser, signin } from '../controllers/auth.controller.js';
import { validateBody } from '../../middlewares/validate.middleware.js';
import { isAdmin } from '../../middlewares/admin.middleware.js';
import { registerSchema } from '../validators/auth.validator.js'
import { loginSchema } from '../validators/auth.validator.js';;

const router = express.Router();
router.post('/Signup', validateBody(registerSchema), registerUser);
router.post('/signin', validateBody(loginSchema), signin)
// router.post('/signin', isAdmin, validateBody(loginSchema), signin)
export default router;
