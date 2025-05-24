import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
// import authRoutes from './api/routes/auth.routes.js';
import authRoutes from './api/routes/auth.routes.js';
// import userRoutes from './api/routes/user.routes.js';
dotenv.config();

const app = express();


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const swaggerFilePath = path.join(__dirname, 'swagger', 'swagger-output.json');
const swaggerDocument = JSON.parse(fs.readFileSync(swaggerFilePath, 'utf-8'));
const corsOptions = {
  origin: ['http://localhost:5173',
    'https://assuring-javelin-smoothly.ngrok-free.app',
    'http://152.58.70.211:5173'

  ],
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
app.use(express.json());

app.use('/api/auth', authRoutes);
// app.use('/api/users', userRoutes);
// app.use('/api', authRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default app;
