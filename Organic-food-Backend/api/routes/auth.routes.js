    import express from 'express';
    import { registerUser } from '../controllers/auth.controller.js';
    import { validateBody } from '../../middlewares/validate.middleware.js';
    import { registerSchema } from '../validators/auth.validator.js';

    const router = express.Router();
    router.post('/register', validateBody(registerSchema), registerUser);

    export default router;
