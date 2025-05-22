import User from '../models/user.model.js';
import bcrypt from 'bcrypt';
import { sendEmail } from '../../utils/email.js';

const HASHVALUE = process.env.HASHVALUE || '10';

export const register = async ({ name, email, password }) => {
  const normalizedEmail = email.toLowerCase();

  const existingUser = await User.findOne({ email: normalizedEmail });
  if (existingUser) {
    const error = new Error('Email already exists');
    error.status = 409;
    throw error;
  }

  const saltRounds = parseFloat(HASHVALUE);
  if (isNaN(saltRounds) || saltRounds <= 0) {
    const error = new Error('Invalid salt rounds config');
    error.status = 500;
    throw error;
  }

  const hashedPassword = await bcrypt.hash(password, saltRounds);

  const newUser = await User.create({
    name,
    email: normalizedEmail,
    password: hashedPassword,
  });

  await sendEmail(
    newUser.email,
    'Welcome!',
    'Thanks for signing up!',
    '<strong>Thanks for signing up!</strong>'
  );

  return {
    message: 'User registered successfully',
    userId: newUser._id,
  };
};
