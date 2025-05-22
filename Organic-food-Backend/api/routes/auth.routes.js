// import express from 'express';
// import { registerUser, loginUser, registerUser, signUpAdminService } from '../controllers/auth.controller.js';
// import { validateBody } from '../../middlewares/validate.middleware.js';
// import { registerSchema, loginSchema } from '../validators/auth.validator.js';

// const router = express.Router();

// router.post('/registerUser',  validateBody(registerSchema), registerUser);
// router.post('/signUpAdminService',  validateBody(registerSchema), signUpAdminService);

// export default router;

import express from 'express';
import { registerUser } from '../controller/auth.controller.js';
import { validateBody } from '../../middleware/validate.middleware.js';
import { registerSchema } from '../validator/auth.validator.js';

const router = express.Router();
router.post('/register', validateBody(registerSchema), registerUser);

export default router;
